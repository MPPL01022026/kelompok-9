from pathlib import Path
from xml.sax.saxutils import escape
import re
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak, KeepTogether
from reportlab.lib.utils import ImageReader

root = Path(__file__).resolve().parents[2]
md_path = root / 'docs' / 'sprint-03' / 'LAPORAN_PELAKSANAAN_SPRINT_3.md'
pdf_path = root / 'docs' / 'sprint-03' / 'LAPORAN_PELAKSANAAN_SPRINT_3.pdf'
for name, path in [('Arial', r'C:\Windows\Fonts\arial.ttf'), ('Arial-Bold', r'C:\Windows\Fonts\arialbd.ttf'), ('Georgia', r'C:\Windows\Fonts\georgia.ttf'), ('Georgia-Bold', r'C:\Windows\Fonts\georgiab.ttf')]:
    pdfmetrics.registerFont(TTFont(name, path))
pdfmetrics.registerFontFamily('Arial', normal='Arial', bold='Arial-Bold', italic='Arial', boldItalic='Arial-Bold')
pdfmetrics.registerFontFamily('Georgia', normal='Georgia', bold='Georgia-Bold', italic='Georgia', boldItalic='Georgia-Bold')
W, H = A4
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleX', parent=styles['Title'], fontName='Georgia-Bold', fontSize=23, leading=29, textColor=colors.HexColor('#000000'), alignment=TA_CENTER, spaceAfter=10))
styles.add(ParagraphStyle(name='SubX', parent=styles['Normal'], fontName='Arial', fontSize=11, leading=16, textColor=colors.HexColor('#333333'), alignment=TA_CENTER, spaceAfter=18))
styles.add(ParagraphStyle(name='H1X', parent=styles['Heading1'], fontName='Georgia-Bold', fontSize=17, leading=22, textColor=colors.HexColor('#000000'), spaceBefore=14, spaceAfter=8, keepWithNext=True))
styles.add(ParagraphStyle(name='H2X', parent=styles['Heading2'], fontName='Arial-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#000000'), spaceBefore=10, spaceAfter=6, keepWithNext=True))
styles.add(ParagraphStyle(name='BodyX', parent=styles['BodyText'], fontName='Arial', fontSize=9, leading=13, textColor=colors.HexColor('#000000'), spaceAfter=6))
styles.add(ParagraphStyle(name='SmallX', parent=styles['BodyText'], fontName='Arial', fontSize=7.2, leading=9, textColor=colors.HexColor('#000000')))
styles.add(ParagraphStyle(name='QuoteX', parent=styles['BodyText'], fontName='Arial', fontSize=8.5, leading=12, textColor=colors.HexColor('#000000'), leftIndent=12, borderColor=colors.HexColor('#000000'), borderWidth=1, borderPadding=8, backColor=colors.HexColor('#ffffff'), spaceBefore=8, spaceAfter=12))
styles.add(ParagraphStyle(name='CellHeadX', parent=styles['BodyText'], fontName='Arial-Bold', fontSize=7.2, leading=9, textColor=colors.black))

def inline(text):
    raw = text.strip()
    raw = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', lambda m: f'[Image: {m.group(1)}]', raw)
    text = escape(raw)
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    text = re.sub(r'\*(.+?)\*', r'<i>\1</i>', text)
    text = re.sub(r'`(.+?)`', r'\1', text)
    text = re.sub(r'\[(.+?)\]\((.+?)\)', r'<link href="\2" color="#000000">\1</link>', text)
    return text

def draw_page(canvas, doc):
    canvas.saveState()
    if doc.page > 1:
        canvas.setStrokeColor(colors.HexColor('#000000'))
        canvas.line(18*mm, 17*mm, W-18*mm, 17*mm)
        canvas.setFont('Arial', 7)
        canvas.setFillColor(colors.HexColor('#000000'))
        canvas.drawString(18*mm, 11*mm, 'AYAM GUNTING MALAYSIA  |  LAPORAN SPRINT 3')
        canvas.drawRightString(W-18*mm, 11*mm, str(doc.page))
    canvas.restoreState()

story=[]
lines=md_path.read_text(encoding='utf-8').splitlines()
i=0
first_title=True
while i < len(lines):
    line=lines[i].rstrip()
    if not line.strip(): i+=1; continue
    if line.strip() == '<!-- pagebreak -->':
        story.append(PageBreak()); i+=1; continue
    if line.startswith('# '):
        title=line[2:].strip()
        if first_title:
            story.append(Spacer(1, 33*mm))
            story.append(Paragraph('LAPORAN PELAKSANAAN EKSEKUSI PROYEK', ParagraphStyle('kicker', parent=styles['BodyX'], alignment=TA_CENTER, fontName='Arial-Bold', textColor=colors.HexColor('#000000'), fontSize=9, spaceAfter=15)))
            story.append(Paragraph(escape(title), styles['TitleX']))
            story.append(Paragraph('Sistem Informasi Penjualan dan Manajemen Produk UMKM Ayam Gunting Malaysia<br/>MVP lokal  |  Pemeriksaan 31 Oktober 2026', styles['SubX']))
            story.append(Spacer(1, 15*mm))
            first_title=False
        else:
            pass
        i+=1; continue
    if line.startswith('## '):
        heading=line[3:].strip()
        if heading.startswith('Eksekusi proyek'):
            pass
        elif heading in ('Ringkasan', 'Tujuan dan ruang lingkup', 'Kontribusi yang tercatat', 'Kondisi aplikasi', 'Tangkapan layar aplikasi', 'Wireframe', 'Pemeriksaan', 'Koordinasi dan tindak lanjut', 'Referensi'):
            if heading == 'Tujuan dan ruang lingkup':
                story.append(PageBreak())
            story.append(Paragraph(inline(heading), styles['H1X']))
        else:
            story.append(Paragraph(inline(heading), styles['H1X']))
        i+=1; continue
    if line.startswith('#### '):
        story.append(PageBreak())
        story.append(Paragraph(inline(line[5:]), styles['H2X'])); i+=1; continue
    if line.startswith('### '):
        story.append(Paragraph(inline(line[4:]), styles['H2X'])); i+=1; continue
    if line.startswith('> '):
        text=[]
        while i<len(lines) and lines[i].startswith('> '): text.append(lines[i][2:].strip()); i+=1
        story.append(Paragraph(inline(' '.join(text)), styles['QuoteX'])); continue
    image_match = re.fullmatch(r'!\[([^\]]*)\]\(([^)]+)\)', line.strip())
    if image_match:
        image_path = (md_path.parent / image_match.group(2)).resolve()
        if image_path.exists():
            available_w = W - 36*mm
            available_h = 150*mm
            img=Image(str(image_path))
            scale=min(available_w/img.imageWidth, available_h/img.imageHeight, 1.0)
            img.drawWidth=img.imageWidth*scale
            img.drawHeight=img.imageHeight*scale
            img.hAlign='CENTER'
            caption=Paragraph(inline(image_match.group(1)), styles['SmallX'])
            story.append(KeepTogether([Spacer(1,4), img, caption, Spacer(1,8)]))
        else:
            story.append(Paragraph(inline(f'[Image unavailable: {image_match.group(1)}]'), styles['SmallX']))
        i+=1; continue
    if line.startswith('|'):
        table_lines=[]
        while i<len(lines) and lines[i].startswith('|'):
            table_lines.append(lines[i]); i+=1
        rows=[]
        for raw in table_lines:
            cells=[c.strip() for c in raw.strip().strip('|').split('|')]
            if all(re.fullmatch(r':?-{3,}:?', c or '-') for c in cells): continue
            rows.append(cells)
        if rows:
            n=max(map(len,rows)); data=[]
            for ri,row in enumerate(rows):
                row=row+['']*(n-len(row))
                data.append([Paragraph(inline(c), styles['CellHeadX'] if ri==0 else styles['SmallX']) for c in row])
            usable=W-36*mm
            if n==2: widths=[usable*.30, usable*.70]
            elif n>=5: widths=[usable*.14,usable*.17,usable*.20,usable*.20,usable*.15,usable*.14][:n]
            else: widths=[usable/n]*n
            t=Table(data,colWidths=widths,repeatRows=1,hAlign='LEFT')
            t.setStyle(TableStyle([
                ('BACKGROUND',(0,0),(-1,0),colors.HexColor('#dddddd')),
                ('GRID',(0,0),(-1,-1),.5,colors.black),
                ('VALIGN',(0,0),(-1,-1),'TOP'),
                ('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5),
                ('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5),
                ('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#eeeeee')]),
            ]))
            story.extend([t,Spacer(1,8)])
        continue
    if re.match(r'^\d+\. ',line) or line.startswith('- '):
        ordered=bool(re.match(r'^\d+\. ',line)); items=[]
        while i<len(lines) and (re.match(r'^\d+\. ',lines[i]) if ordered else lines[i].startswith('- ')):
            item=re.sub(r'^\d+\. |^- ','',lines[i].strip()); items.append(item); i+=1
        for j,item in enumerate(items,1):
            bullet=f'{j}.' if ordered else '-'
            story.append(Paragraph(f'<b>{bullet}</b>  {inline(item)}',styles['BodyX']))
        continue
    if line.strip()=='---':
        story.append(Spacer(1,4)); i+=1; continue
    story.append(Paragraph(inline(line),styles['BodyX'])); i+=1

pdf=SimpleDocTemplate(str(pdf_path),pagesize=A4,rightMargin=18*mm,leftMargin=18*mm,topMargin=18*mm,bottomMargin=23*mm,title='Laporan Pelaksanaan Sprint 3 - Ayam Gunting Malaysia',author='Kelompok 9')
pdf.build(story,onFirstPage=draw_page,onLaterPages=draw_page)
print(pdf_path)
