describe('As a Admin i would like to test the Search function so that i can find my Recipes easily (Lowercase Letters).', function () {
    
    //Positiv Test
    
        it('Test1', function () {
        
        cy
            .visit('https://www.matfrojd.com/?dev')
            .wait(10000)
            .contains('Matfröjd Start')
            .get('.rn-1awozwy.rn-16y2uox > .rn-4xf99a > .rn-13yce4e')
            .click()
            .wait(5000)
            .get('[class="rn-1oszu61 rn-1niwhzg rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-1loqt21 rn-6koalj rn-1qe8dj5 rn-1mlwlqe rn-eqz5dr rn-1g7fiml rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-1otgn73 rn-lrvibr rn-199wky7 rn-1lgpqti"]')
            .click()
            .get('.rn-97bpaa')
            .type('fisk')

        })



        it('Test 2As a Admin i would like to test the Search function so that i can find my Recipes easily (Uppercase Letters)', function () {
        
            cy
                .visit('https://www.matfrojd.com/?dev')
                .wait(10000)
                .contains('Matfröjd Start')
                .get('.rn-1awozwy.rn-16y2uox > .rn-4xf99a > .rn-13yce4e')
                .click()
                .wait(5000)
                .get('[class="rn-1oszu61 rn-1niwhzg rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-1loqt21 rn-6koalj rn-1qe8dj5 rn-1mlwlqe rn-eqz5dr rn-1g7fiml rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-1otgn73 rn-lrvibr rn-199wky7 rn-1lgpqti"]')
                .click()
                .get('.rn-97bpaa')
                .type('FISH')
    
            })

            // As a Admin i would like to test the Search function so that i can find my Recipes easily (Uppercase Letters)

        it('Test3 As a Admin i would like to test the Search function so that i can find my Recipes easily (bokstäver siffror och tecken)', function () {
        
            cy
                .visit('https://www.matfrojd.com/?dev')
                .wait(10000)
                .contains('Matfröjd Start')
                .get('.rn-1awozwy.rn-16y2uox > .rn-4xf99a > .rn-13yce4e')
                .click()
                .wait(5000)
                .get('[class="rn-1oszu61 rn-1niwhzg rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-1loqt21 rn-6koalj rn-1qe8dj5 rn-1mlwlqe rn-eqz5dr rn-1g7fiml rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-1otgn73 rn-lrvibr rn-199wky7 rn-1lgpqti"]')
                .click()
                .get('.rn-97bpaa')
                .type('--FISH5--')
    
            })

    })