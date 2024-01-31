# Generated by Django 5.0 on 2024-01-23 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_cartitem_menu_item_cartitem_menu_item_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitem',
            name='menu_item_id',
        ),
        migrations.RemoveField(
            model_name='cartitem',
            name='quantity',
        ),
        migrations.AlterField(
            model_name='cartitem',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='menuitem',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=8),
        ),
    ]
