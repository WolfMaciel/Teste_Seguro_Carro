/// <reference types="cypress"/>

describe('dados do veiculo', () => {

    it('Inserir dados do veículo', () => {

        //acessar aplicação
    cy.visit('https://sampleapp.tricentis.com/101/app.php')

    //selecionar elementos do campo Make marca do carro
    cy.get('#make').select(2).wait(2000)//elemento selecionado atraves do index
    
    //selecionar modelo
    cy.get('#model').select(1)

    //selecionar elemento data de manufatura
    cy.get('#dateofmanufacture').type('06/17/1978') //BMW M1

    //digitar capacidade de cilindro
    cy.get('#cylindercapacity').type('500')

    //digitar velocidade KM
    cy.get('#engineperformance').type('300')

    //selecionar numero de assentos
    cy.get('#numberofseats').select(5)

    //selecionar right handr drive
    cy.get(':nth-child(7) > .group > :nth-child(2) > .ideal-radio').click()

    //selecionar combustivel
    cy.get('#fuel').select(1)

    //digitar payload
    cy.get('#payload').type('500')

    //digitar peso
    cy.get('#totalweight').type('500')

    //digitar preço
    cy.get('#listprice').type('500')

    //digitar placa
    cy.get('#licenseplatenumber').type('PEQ6648')

    //quilometragem anual
    cy.get('#annualmileage').type('500')

    //Clicar botao next para proximo formulário
    cy.get('#nextenterinsurantdata').click()

//Segundo formulário - Dados do segurado
    
//Digitar Nome
cy.get('#firstname').type('Wolf')

//Digitar sobrenome
cy.get('#lastname').type('Maciel')

//Data de nascimento
cy.get('#birthdate').type('06/17/1990')

//Genero
cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio').click()

//Endereço
cy.get('#streetaddress').type('Rua dos Navegantes')

//País
cy.get('#country').select('Brazil')

//CEP
cy.get('#zipcode').type('51020170')

//Cidade
cy.get('#city').type('Recife')

//Ocupação
cy.get('#occupation').select('Unemployed')

//Hobbie
cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(2) > .ideal-check').click()

//Clicar botão next proximo formulario
cy.get('#nextenterproductdata').click()

//Terceiro formulario - Dados do produto

//Data de inicio do seguro
cy.get('#startdate').type('01/15/2024')

//Soma do seguro
cy.get('#insurancesum').select('3.000.000,00')

//bonus
cy.get('#meritrating').select('Bonus 2')

//Seguro contra acidente
cy.get('#damageinsurance').select('Full Coverage')

//Produto opcional
cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check').click()

//Carro cortesia
cy.get('#courtesycar').select('No')

//Clicar botão next proximo formulario
cy.get('#nextselectpriceoption').click()

//Quarto formulario - Selecionar orçamento


    })
})