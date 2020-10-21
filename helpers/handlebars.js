function hbsHelpers(handlebars){
    return handlebars.create({
        defaultlayout: 'main',
        partialsDir: ['views/partials/'],

        helpers :{
            ifCond : function(params) {
                var index = params.data.index +1,
                    nth = params.hash.nth;
            
                if (index % nth === 0) {
                    return params.fn(this);
                }
                else{
                    return params.inverse(this);
                }
            }
        }
    });

}

module.exports = hbsHelpers;