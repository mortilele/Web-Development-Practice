from .models import Vacancy, Company
from .serializers import CompanySerializer, VacancyFullSerializer, VacancyShortSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


# Create your views here.
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(methods=['get'], detail=True)
    def vacancies(self, request, *args, **kwargs):
        serializer = VacancyShortSerializer(Vacancy.objects.filter(company=self.get_object()), many=True)
        return Response(serializer.data)


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancyFullSerializer

    @action(methods=['get'], detail=False)
    def top_ten(self, request):
        top_ten = self.get_queryset().order_by('-salary')[:10]
        serializer = VacancyFullSerializer(top_ten, many=True)
        return Response(serializer.data)


