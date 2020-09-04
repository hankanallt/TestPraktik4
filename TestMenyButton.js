describe('As a Admin i would like to test the meny button so that it works as expected.', function () {
    
    //Positiv Test
    
        it('Test1', function () {
        
        cy
            .visit('https://www.matfrojd.com/?dev')
            .wait(10000)
            .contains('Matfröjd Start')
            .get('[class="rn-1habvwh rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-16y2uox rn-1wbh5a2 rn-1ro0kt6 rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-1hfyk0a rn-bnwqim rn-1lgpqti"]')
            .click('img', {force: true })
            

        })
    })
    