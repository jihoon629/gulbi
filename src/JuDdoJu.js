import React, { useState } from 'react';
import './Gulbi.css'; // CSS 파일 import

export default function JuDdoJu() {
  const [gulbi, setGulbi] = useState(''); // 굴비 값 (백만 골드당 가격)
  const [packagePrice, setPackagePrice] = useState(''); // 패키지 가격 (원)
  const [auctionGold, setAuctionGold] = useState(''); // 경매장 판매가 (만 골드)
  const [time, setTime] = useState(''); // 횟수
  const [result, setResult] = useState(null); // 결과 값

  // 굴비 효율 계산 함수
  function JuDdoJuJak(gulbi, packagePrice, auctionGold, time) {
    return Math.round((auctionGold / 100) * gulbi - packagePrice) * time; // 총 차익 반올림
  }

  // 계산 버튼 클릭 핸들러
  const handleCalculate = () => {
    if (gulbi && packagePrice && auctionGold && time) {
      const totalProfit = JuDdoJuJak(
        Number(gulbi), // 굴비 값 (백만 골드당 가격)
        Number(packagePrice), // 패키지 가격 (원)
        Number(auctionGold), // 경매장 판매가 (만 골드)
        Number(time) // 횟수
      );
      setResult(totalProfit); // 결과 저장
    } else {
      alert('모든 값을 입력해주세요!');
    }
  };

  return (
    <div className="container">
      <h1 className="title">주또주 비용</h1>
      <div className="input-group">
        <label>
          <input
            type="number"
            value={gulbi}
            onChange={(e) => setGulbi(e.target.value)}
            placeholder="굴비 값 (백만 골드당 가격)"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="number"
            value={packagePrice}
            onChange={(e) => setPackagePrice(e.target.value)}
            placeholder="패키지 가격 (원)"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="number"
            value={auctionGold}
            onChange={(e) => setAuctionGold(e.target.value)}
            placeholder="경매장 판매가 (만 골드)"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="횟수"
          />
        </label>
      </div>
      <button className="button" onClick={handleCalculate}>
        계산
      </button>
      {result !== null && (
        <div className="result">
          <strong>총 차익:</strong> {result} 원
        </div>
      )}
    </div>
  );
}