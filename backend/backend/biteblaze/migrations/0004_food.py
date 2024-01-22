

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biteblaze', '0003_order'),
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foodname', models.CharField(max_length=255)),
                ('foodprice', models.IntegerField()),
                ('foodimage', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
