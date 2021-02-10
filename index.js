app.post('/read_csv', upload.single('file'), function (req, res, next) {
    console.log('Read csv file')

    let arrayCredit = new Array()
    let i           = 0
    let query = [];

    fs.createReadStream("upload_csv/" + req.file.filename)
    .pipe(csv())
    .on('data', (row) => {
        if (!is_empty(row.Credit)){
            row.Credit = row.Credit.replace(".00","").replace(",","")
            arrayCredit.push(row)
            query.push("credit[" + i + "]=" + row.Credit);
            i++
        }
    }) 
    .on('end', () => {
        // place your code whats you goona do with data from csv
    });
});
