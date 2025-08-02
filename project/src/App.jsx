import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

// AppCss를 <style> 태그로 직접 삽입하는 대신, 
// App.css 파일을 import하여 사용하는 것이 일반적입니다.
// 아래 코드는 main.jsx에서 App.css를 import하는 것을 전제로 합니다.
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;