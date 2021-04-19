import React from 'react'
import Image from 'next/image'
import { SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/landing-layout'

const Gallery = () => {
  return (
    <Layout>
      <SimpleGrid spacing={10} columns={[1, 2, 3]}>
        <Image src="/works/IMG_2106.jpg" width="300" height="300" />
        <Image src="/works/IMG_2116.jpg" width="300" height="300" />
        <Image src="/works/IMG_2876.jpg" width="300" height="300" />
        <Image src="/works/IMG_2878.jpg" width="300" height="300" />
        <Image src="/works/IMG_2879.jpg" width="300" height="300" />
        <Image src="/works/IMG_2880.jpg" width="300" height="300" />
        <Image src="/works/IMG_2882.jpg" width="300" height="300" />
        <Image src="/works/IMG_2883.jpg" width="300" height="300" />
        <Image src="/works/IMG_2886.jpg" width="300" height="300" />
        <Image src="/works/IMG_3051.jpg" width="300" height="300" />
        <Image src="/works/IMG_3154.jpg" width="300" height="300" />
        <Image src="/works/IMG_3251.jpg" width="300" height="300" />
        <Image src="/works/IMG_3309.jpg" width="300" height="300" />
        <Image src="/works/IMG_3523.jpg" width="300" height="300" />
        <Image src="/works/IMG_3524.jpg" width="300" height="300" />
      </SimpleGrid>
    </Layout>
  )
}

export default Gallery
