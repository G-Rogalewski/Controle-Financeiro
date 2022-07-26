const transactionsUL = document.querySelector('#transactions')

const dummyTransactions = [
    { id: 1, name: 'Gasolina', amount: -250 },
    { id: 2, name: 'Salário', amount: 5000 },
    { id: 3, name: 'Mercado', amount: -1300 },
    { id: 4, name: 'Futebol', amount: -30 }
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionsUL.prepend(li)
}

addTransactionIntoDOM(dummyTransactions[1])