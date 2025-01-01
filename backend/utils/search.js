const {fuzzy} = require('fast-fuzzy');


async function findBestMatchColumn(model, columns, keyword, limit, offset){
    const data = await model.findAll({raw: true});
    const results = [];
    const threshold = 0.5;

    data.forEach(row =>{
        columns.forEach(column =>{
            const value = row[column] || '';
            const score = fuzzy(keyword.toLowerCase(), value.toLowerCase());
            results.push({row, score});
        })
    })

    const sortedResults = results.sort((a, b) => b.score - a.score).slice(offset, offset + limit);

    return sortedResults.filter(result => result.score >= threshold).map(result => result.row);
}

module.exports = {findBestMatchColumn};