# Generated by Django 3.0.4 on 2020-04-08 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200408_0714'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='discount',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='Скидка'),
        ),
    ]
