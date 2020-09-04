describe('As a Admin i would like to test the Search function in Skafferi so that i can add Ris Cooking products to my List.', function () {
    
    //Positiv Test
    
        it('Test1', function () {
        
        cy
            .visit('https://www.matfrojd.com/?dev')
            .wait(10000)
            .contains('Matfröjd Start')
            .get('[style="background-color: rgb(0, 185, 226);"] > .rn-13yce4e')
            .click()
            .get('.rn-5byaa')
            .click()
            .get('.rn-97bpaa')
            .click()
            .type('Ris')
            .get('.rn-150rngu > :nth-child(1) > :nth-child(1) > :nth-child(1) > .rn-1awozwy')
            .click()
            cy.get('.rn-o52ifk > .rn-1awozwy')
            .click();
            
        })

        //Negativ Test

        it('Test2 As a Admin i would like to test the Search function in Skafferi so that i can add Rit Cooking products to my List ', function () {
        
            cy
                .visit('https://www.matfrojd.com/?dev')
                .wait(10000)
                .contains('Matfröjd Start')
                .get('[style="background-color: rgb(0, 185, 226);"] > .rn-13yce4e')
                .click()
                .get('.rn-5byaa')
                .click()
                .get('.rn-97bpaa')
                .click()
                .type('Rit')
                .get('.rn-150rngu > :nth-child(1) > :nth-child(1) > :nth-child(1) > .rn-1awozwy')
                .click()
                cy.get('.rn-o52ifk > .rn-1awozwy')
                .click();
                
            })
    })