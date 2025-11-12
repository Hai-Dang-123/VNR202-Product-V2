
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { QuizItem } from './types';
import { QUIZ_DATA } from './constants';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'welcome' | 'playing'>('welcome');
  const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [isKeywordInfoShown, setIsKeywordInfoShown] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    setQuizItems(shuffleArray(QUIZ_DATA));
  }, []);

  const handleStartGame = () => {
    setGameState('playing');
  };

  const handleShowAnswer = useCallback(() => {
    setIsAnswerShown(true);
    // auto-open keyword info if current question has it
    setIsKeywordInfoShown(Boolean(quizItems[currentQuestionIndex]?.keywordInfo));
  }, [quizItems, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    setIsAnswerShown(false);
    setIsKeywordInfoShown(false);
    setIsImageLoading(true);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % quizItems.length);
  }, [quizItems.length]);
  
  const currentQuestion = useMemo(() => {
    if (quizItems.length === 0) return null;
    return quizItems[currentQuestionIndex];
  }, [quizItems, currentQuestionIndex]);

  if (gameState === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex flex-col items-center justify-center p-4 text-center">
        <header className="mb-10">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] mb-4 animate-fade-in-down">
            Đuổi Hình Bắt Chữ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
            Chủ đề: Lịch sử Đảng Cộng sản Việt Nam
            </p>
        </header>

        <main className="max-w-xl mx-auto mb-12">
            <p className="text-gray-300 leading-relaxed">
                Chào mừng bạn đến với trò chơi trí tuệ đầy thử thách! Hãy cùng khám phá những cột mốc vàng son trong lịch sử Đảng Cộng sản Việt Nam qua những hình ảnh và gợi ý thú vị. Liệu bạn có thể "bắt" được hết những "chữ" lịch sử này không?
            </p>
        </main>
        
        <button
          onClick={handleStartGame}
          className="py-4 px-10 bg-yellow-500 text-gray-900 font-bold text-xl rounded-lg shadow-lg shadow-yellow-500/30 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-pulse"
        >
          Bắt Đầu Chơi
        </button>

        <footer className="absolute bottom-8 text-center text-gray-500 text-sm">
            <p>Phát triển bởi AI - Lấy cảm hứng từ lịch sử Việt Nam</p>
        </footer>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Đang tải trò chơi...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-6 md:mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          Đuổi Hình Bắt Chữ
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2">Chủ đề: Lịch sử Đảng Cộng sản Việt Nam</p>
      </header>

      <main className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/50 border border-gray-700/50 overflow-hidden transition-all duration-500">
        <div className="aspect-w-16 aspect-h-9 relative">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
              <svg className="animate-spin h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
          <img
            key={currentQuestion.id}
            src={currentQuestion.imageUrl}
            alt="Gợi ý"
            className={`object-cover w-full h-full transition-opacity duration-700 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsImageLoading(false)}
          />
        </div>

        <div className="p-6">
          <div className="bg-black/20 p-4 rounded-lg text-center mb-6 min-h-[80px] flex items-center justify-center">
            <p className="text-xl font-semibold text-yellow-200">
              <span className="text-gray-400 font-normal mr-2">Gợi ý:</span>
              {currentQuestion.hint}
            </p>
          </div>

          <div 
            className={`transition-all duration-500 ease-in-out ${isAnswerShown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
          >
            <div className="bg-green-800/30 border border-green-500/50 p-4 rounded-lg mb-4 text-center">
              <h3 className="text-sm font-bold uppercase text-green-300 mb-1">Đáp án</h3>
              <p className="text-3xl font-bold text-white">{currentQuestion.answer}</p>
            </div>
            <div className="bg-blue-800/30 border border-blue-500/50 p-4 rounded-lg">
              <h3 className="text-sm font-bold uppercase text-blue-300 mb-2">Nguồn gốc</h3>
              <p className="text-sm text-gray-200">{currentQuestion.chapter}</p>
            </div>
          </div>

          {/* Keyword info section moved outside collapsing container so it's not clipped */}
          {isAnswerShown && (
            <div className="mt-4 flex flex-col items-center">
              <button
                onClick={() => setIsKeywordInfoShown((s) => !s)}
                className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-500 transition-colors"
              >
                {isKeywordInfoShown ? 'Ẩn thông tin từ khóa' : 'Hiện thông tin từ khóa'}
              </button>

              <div className={`mt-3 w-full max-w-xl transition-all duration-300 ${isKeywordInfoShown ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden`}>
                <div className="bg-gray-900/40 border border-gray-600 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-yellow-300 mb-2">Thông tin thêm</h4>
                  <p className="text-sm text-gray-200">
                    {currentQuestion.keywordInfo ?? 'Không có thông tin bổ sung cho từ khóa này.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <button
              onClick={handleShowAnswer}
              disabled={isAnswerShown}
              className="w-full py-3 px-6 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400 transform hover:scale-105"
            >
              Hiện Đáp Án
            </button>
            <button
              onClick={handleNextQuestion}
              className="w-full py-3 px-6 bg-red-700 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Câu Tiếp Theo
            </button>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        {/* <p>Lấy cảm hứng từ lịch sử Việt Nam</p> */}
      </footer>
    </div>
  );
};

export default App;
