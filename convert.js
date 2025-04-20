/*
Převod měny
Napište funkci, která převede částku na české koruny.
Napište funkci convertToCZK, která převede částku zadanou v cizí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

Měna	Kód	Kurz
Euro	EUR	24.47
Britská libra	GBP	28.09
Americký dolar	USD	24.81
Bitcoin	BTC	478637
Výslednou částku zaokrouhlete na celé koruny. Příklad použití:

document.body.innerHTML += convertToCZK(25, 'EUR');
Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.
*/
const rates = {
    EUR: 24.47,
    GBP: 28.09,
    USD: 24.81,
    BTC: 478637
  };

  const convertToCZK = (amount, currencyCode) => {
    if (!rates[currencyCode]) {
      return null;
    }
    return Math.round(amount * rates[currencyCode]);
  };

  document.body.innerHTML += convertToCZK(25, 'EUR') + '<br>';


