# Asr-Product-Card

Este es un paquete de pruebas de despliegue en npm

### Alejandro Sánchez

### Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'asr-product-card';
```

```
<ProductCard 
    product={ product } 
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, increaseBy, count, isMaxCountReached, maxCount  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```