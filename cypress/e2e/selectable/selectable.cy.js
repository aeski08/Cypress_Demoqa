describe('Selectable',()=>{

    beforeEach(() => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(5)').click()
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-1').click()

    })

    //List
    it('Selectable list', () => {

       cy.get('#demo-tab-list').click({force:true}) 

        //Opsiyonalri iceren listemizi tikliyoruz
        // 1. opsiyon
       cy.xpath('//*[@id="demo-tabpane-list"]//..').each(data=>{
        if(data.text()=='Cras justo odio'){
                data.click()
            }
        })
       cy.get('#verticalListContainer > .active').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('mt-2 list-group-item active list-group-item-action')
        })

        //2. Opsiyon
       cy.xpath('//*[@id="demo-tabpane-list"]//..').each(data=>{
        if(data.text()=='Dapibus ac facilisis in'){
                data.click()
            }
        })
       cy.get('#verticalListContainer > .active').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('mt-2 list-group-item active list-group-item-action')
        })

        //3.Opsiyon
       cy.xpath('//*[@id="demo-tabpane-list"]//..').each(data=>{
        if(data.text()=='Morbi leo risus'){
                data.click()
            }
        })
       cy.get('#verticalListContainer > .active').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('mt-2 list-group-item active list-group-item-action')
        })

        //4. Opsiyon
       cy.xpath('//*[@id="demo-tabpane-list"]//..').each(data=>{
        if(data.text()=='Porta ac consectetur ac'){
                data.click()
            }
        })
       cy.get('#verticalListContainer > .active').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('mt-2 list-group-item active list-group-item-action')
        })

    });

    //Grid
    it('Selectable Grid', () => {
        cy.get('#demo-tab-grid').click()
        //Grid listesi
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='One'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //2. element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Two'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //3.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Three'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //4.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Four'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //5.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Five'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //6.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Six'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //7.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Seven'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //8.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Eight'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })

        //9.element
        cy.xpath("//*[@id='row1']//..//..").each(data=>{
            if(data.text()=='Nine'){
                data.click()
            }
        })
        cy.get('#row1 > :nth-child(1)').invoke('attr','class').then(input=>{
            cy.expect(input).to.be.eql('list-group-item active list-group-item-action')
        })



    });
})