from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def gallery(request):
    return render(request, 'gallery.html')

def contact_us(request):
    return render(request, 'contact_us.html')

def terminal_command(request):
    return render(request, 'terminal_command.html')

def syllabus(request):
    return render(request, 'syllabus.html')

