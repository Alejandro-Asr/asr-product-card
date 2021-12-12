import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {

    test('debe de mostrar correctamente con la imagen personalizado ', () => {
        const wrapper = renderer.create(
            <ProductImage img="http://hola.jpg" />
        );
        
        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

    test('Debe de mostrar el componente con la imagen del producto.', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage img={ product2.img } />
                    )
                }
            </ProductCard>
        );
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
    
    
    
})
