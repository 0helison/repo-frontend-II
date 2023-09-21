teste=(' Teste de Nivelamento ')
print('{:=^44}'.format(teste))
print('='*44)
n = 1
maior_altura = menor_altura = qtd_mulheres = qtd_homens = soma_altura_homens = 0
while n <= 15:
    sexo = input(f'Informe o sexo da {n}º pessoa [M/F]:  ').upper().strip()
    altura = float(input(f'Agora, informe a altura da {n}º pessoa: '))
    if (sexo == 'F'):
        qtd_mulheres += 1
    else:
        qtd_homens += 1
        soma_altura_homens += altura
    if (n == 1):
        maior_altura = menor_altura = altura
    else:
        if (altura > maior_altura):
            maior_altura = altura
        if(altura < menor_altura):
            menor_altura = altura
    print('=' * 44)
    n += 1
media_altura_homens = soma_altura_homens / qtd_homens
resultado=(' Resultado: ')
print('{:=^44}'.format(resultado))
print('='*44)
print(f'A maior altura é igual a {maior_altura} e a menor é {menor_altura}')
print(f'A média de altura dos homens é igual a {media_altura_homens:.2}')
print(f'A quantidade de mulheres é igual a {qtd_mulheres}')
print('='*44)