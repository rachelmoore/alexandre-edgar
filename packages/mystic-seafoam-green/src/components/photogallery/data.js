import beaune from "../../assets/carousel/beaune.jpeg"
import bwtree from "../../assets/carousel/bwtree.jpeg"
import crow from "../../assets/carousel/crow.jpg"
import goldengatebridge from "../../assets/carousel/goldengatebridge.jpeg"
import kitten from "../../assets/carousel/kitten.jpg"
import oceanrocks from "../../assets/carousel/oceanrocks.jpg"
import peacock from "../../assets/carousel/peacock.jpg"
import ruby from "../../assets/carousel/ruby.jpg"
import teacup from "../../assets/carousel/teacup.jpg"
import vichytree from "../../assets/carousel/vichytree.jpg"
import vineyard from "../../assets/carousel/vineyard.jpg"

export const images = [
    {
      id: '01',
      src: beaune,
      alt: 'Beaune',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
    {
      id: '02',
      src: bwtree,
      alt: 'Black and white tree',
      aspectRatio: 4 / 3, 
      objectFit: "contain !important",
    },
    {
      id: '03',
      src: crow,
      alt: 'Crow',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
    {
      id: '04',
      src: goldengatebridge,
      alt: 'Golden Gate Bridge',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
    {
      id: '05',
      src: kitten,
      alt: 'Kitten',
      aspectRatio: 4 / 3, 
      objectFit: "contain !important",
    },
    {
      id: '06',
      src: oceanrocks,
      alt: 'Ocean rocks',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
    {
      id: '07',
      src: peacock,
      alt: 'Peacock',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
    {
      id: '08',
      src: ruby,
      alt: 'Cat with grass',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
    {
      id: '09',
      src: teacup,
      alt: 'Teacup',
      aspectRatio: 4 / 3, 
      objectFit: "contain !important",
    },
    {
      id: '10',
      src: vichytree,
      alt: 'Vichy Springs tree',
      aspectRatio: 4 / 3, 
      objectFit: "contain !important",
    },
    {
      id: '11',
      src: vineyard,
      alt: 'Ukiah vineyard',
      aspectRatio: 4 / 3, 
      objectFit: "cover",
    },
  ]
  export const products = [
    {
      id: '1',
      name: 'Bamboo Tan',
      currency: 'USD',
      price: 199,
      flag: 'new',
      imageUrl:
        'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '2',
      name: 'Iconic Turquoise',
      currency: 'USD',
      price: 199,
      salePrice: 179.99,
      flag: 'on-sale',
      imageUrl:
        'https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 12,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '3',
      name: 'Marble Leather',
      currency: 'USD',
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 12,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '4',
      name: 'Silve wolf',
      currency: 'GBP',
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80',
      rating: 5,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
  ]