from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    name = models.CharField(max_length=100, verbose_name='Название категории')

    def __str__(self):
        return self.name

    @property
    def get_products(self):
        return Product.objects.filter(category=self)


class Product(models.Model):
    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    name = models.CharField(max_length=200, verbose_name='Название продукта')
    price = models.FloatField(verbose_name='Цена')
    description = models.TextField(blank=True, null=True, verbose_name='Описание продукта')
    count = models.IntegerField(default=0, verbose_name='Количество')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', verbose_name='Продукты')

    def __str__(self):
        return f'{self.name} {self.price}'
