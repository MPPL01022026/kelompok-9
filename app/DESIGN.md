---
version: "alpha"
name: "Ayam Gunting Malaysia"
description: "A street food pickup catalog and shop operations dashboard."
colors:
  primary: "#071B31"
  on-primary: "#FFFEFA"
  secondary: "#26394D"
  tertiary: "#E0AD24"
  on-tertiary: "#071B31"
  surface: "#F4F5F2"
typography:
  display:
    fontFamily: "Montserrat"
    fontSize: "4.5rem"
    fontWeight: "800"
    lineHeight: "0.98"
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Montserrat"
    fontSize: "3rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body:
    fontFamily: "Poppins"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.5"
  label:
    fontFamily: "Poppins"
    fontSize: "0.8125rem"
    fontWeight: "700"
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  gutter: "32px"
  section: "96px"
components:
  primary-action:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.none}"
    height: "52px"
    padding: "0 23px"
  surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
---

## Overview

The storefront is an edge-to-edge food ordering page. Its visual idea is an image-led menu and a clear pickup-order flow. Navy is the ground; gold is reserved for the main action and key emphasis; neutral off-white provides a clean reading surface.

The customer task is to select menu items, place a pickup order, and show its code at the shop. The admin task is to manage products and resolve incoming orders.

## Colors

Use deep navy `#071B31`, strong gold `#E0AD24`, and neutral off-white `#F4F5F2`. Keep contrast high. Do not use pastel tints, gradients, translucent panels, glows, or glass effects.

## Typography

Use Montserrat for the shop name and headings, with Poppins for controls and reading text. Load both faces. Keep display headings bold and compact; keep product names and order details easy to scan.

## Layout

Use the full viewport width. Keep consistent 20 to 72 pixel side gutters based on viewport size. The storefront hero uses the brand name as its main graphic. Subsequent sections change composition and carry real ordering content.

## Elevation & Depth

Surfaces are flat. Separate areas with spacing and solid color changes. Do not add shadows or translucent layers.

## Shapes

Use square corners for buttons, cards, filters, and panels. Gold emphasis is a solid fill, never a glow.

## Components

One gold primary action per section. Navigation remains plain. Category filters are rectangular text controls. Order status is plain text with an underline cue, not a pill. Use genuine food photography; identify stock food photos as illustrative until the shop's own product photos are available. Never substitute emoji or abstract placeholder art.

## Do's and Don'ts

- Do fill the available screen width with a clear, asymmetrical composition.
- Do state the pickup flow in direct language.
- Do keep admin tables and forms legible and task first.
- Do not use pastel colors, decorative dots, blinking decoration, badges for database state, glassmorphism, gradients, generic icon cards, or fake product photography.
