function Ssal(Gulbi,seraItem,auctionGold) {
    const inGameGold=100;

   const SsalMukgold=(inGameGold*seraItem)/Gulbi;

   const  efficiency= (auctionGold*0.97)/(SsalMukgold*0.97);

    return efficiency*100;
} 
console.log(Ssal(900, 19400, 1900));