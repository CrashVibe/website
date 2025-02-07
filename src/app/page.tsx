"use client";
import { useState, useEffect } from "react";

const phrases = ["探索创造", "梦里踏雪", "无限探索", "科技艺术"];

const Home = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    const transitionTimer = setInterval(() => {
      // 先触发淡出动画
      setFadeState("fade-out");

      // 在淡出动画完成后切换文字并触发淡入
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFadeState("fade-in");
      }, 1000); // 这个时间需要与CSS过渡时间匹配
    }, 4000); // 总周期4秒：2秒显示 + 2秒过渡（根据实际情况调整）

    return () => clearInterval(transitionTimer);
  }, []);
  // 新增复制功能
  const copyIP = () => {
    navigator.clipboard.writeText("game.tblstudio.cn");
    alert("已复制服务器IP!");
  };

  return (
    <div className="bg-black text-white">
      {/* 导航栏 */}
      <header className="fixed top-0 left-0 right-0 p-5 bg-black bg-opacity-80 z-10 rounded-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">CrashVibe</div>
          <nav>
            <ul className="flex space-x-8">
              <li className="group">
                <a
                  href="https://uptime.tblstudio.cn/dashboard"
                  className="relative text-white transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="relative block pb-1">
                    状态
                    <span className="absolute bottom-0 left-0 h-[3px] w-full origin-right scale-x-0 transform bg-blue-400 rounded transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></span>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="https://cvdocs.tblstudio.cn/"
                  className="relative text-white transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="relative block pb-1">
                    small 教程
                    <span className="absolute bottom-0 left-0 h-[3px] w-full origin-right scale-x-0 transform bg-blue-400 rounded transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></span>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="https://qm.qq.com/q/J9q03TFrkO"
                  className="relative text-white transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="relative block pb-1">
                    速速加群
                    <span className="absolute bottom-0 left-0 h-[3px] w-full origin-right scale-x-0 transform bg-blue-400 rounded transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative text-center flex justify-center items-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            我们{" "}
            <span
              className={` transition-opacity duration-1000 ${
                fadeState === "fade-out" ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: "linear-gradient(90deg, #2385FC, #4C23FC)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {phrases[currentPhraseIndex]}
            </span>
          </h1>
          <h3 className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
            开启一段属于你的全新旅程，和志同道合的玩家一起探索、建造、分享创意
          </h3>

          {/* 新增按钮组 */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://cvdocs.tblstudio.cn/%E5%85%A5%E9%97%A8/how2join"
              className="px-6 py-2 bg-black rounded-lg hover:bg-opacity-80 transition-all border border-gray-600"
            >
              加入服务器
            </a>
            <a
              href="https://cvdocs.tblstudio.cn/intro"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-opacity-80 transition-all"
            >
              服务器介绍
            </a>
          </div>

          {/* 新增服务器控制台区域 */}
          <div
            className="bg-gray-900 rounded-lg p-4 text-left font-mono cursor-pointer hover:bg-gray-800 transition-all"
            onClick={copyIP}
          >
            <div className="text-green-400 mb-2">
              root@crashvive:~#
              <span className="text-gray-300">./connect_server</span>
            </div>
            <div className="text-white">
              Server IP:{" "}
              <span className="text-blue-400 select-all">
                game.tblstudio.cn
              </span>
              <span className="ml-2 text-gray-500 text-sm">(点击复制)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
