import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Our Aim',
    text: 'Bringing comfort and relaxation to your fingertips, we offer a curated collection of cozy products for a blissful lifestyle.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Our Vision',
    text: 'Our vision is to become the go-to destination for all things cozy, providing unparalleled comfort and relaxation for our customers.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Our History',
    text: 'We have around 5k users and we have delivered around 9k products in the span of 1 year.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
