let bill = [275, 40, 430]

for (i = 0; i < bill.length; i++) {
    console.log(bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 15 / 100 :
    bill[i] < 50 || bill[i] > 400 ? bill[i] * 20 / 100 : 'fk u') 
}