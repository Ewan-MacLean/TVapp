const tvmaze = require('tvmaze-node');

for(let i=0;i<=243;i++)
{
    tvmaze.showIndex(i, function(err, res){
        const jRes = JSON.parse(res)
        jRes.filter(x=>x.genres.includes('Children'));
    });
};
