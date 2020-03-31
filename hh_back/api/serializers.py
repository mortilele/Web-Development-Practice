from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancyShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        exclude = ('company',)


class VacancyFullSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Vacancy
        fields = '__all__'
