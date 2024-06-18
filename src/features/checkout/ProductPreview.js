import React from 'react'
import { GroupBox } from '../../components/group-box/GroupBox'
import ProductItem from './ProductItem'
import { Divider, Typography } from '@mui/material'
import ProductTotal from './ProductTotal'

const ProductPreview = () => {
    return (
        <GroupBox title={(
            <Typography variant='subtitle1'
                fontSize='20px'
                lineHeight='30px'
                fontWeight={400}
            >
                Sản phẩm
            </Typography>
        )} variant='accordion'>
            <Divider sx={{ mt: 3 }} />
            {Array(3).fill(0).map((_, idx) => <ProductItem key={idx} />)}
            <ProductTotal />
        </GroupBox>
    )
}

export default ProductPreview