"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const phrases = ["探索创造", "梦里踏雪", "无限探索", "科技艺术"];

const Home = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    const transitionTimer = setInterval(() => {
      // 先触发淡出动画
      setFadeState("fade-out");

      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFadeState("fade-in");
      }, 1000);
    }, 4000);

    return () => clearInterval(transitionTimer);
  }, []);
  // 新增复制功能
  const copyIP = () => {
    navigator.clipboard.writeText("game.tblstudio.cn");
    alert("已复制服务器 IP!");
  };

  return (
    <div className="bg-black text-white">
      {/* 导航栏优化 */}
      <header className="fixed top-0 left-0 right-0 p-4 md:p-5 bg-black bg-opacity-80 z-30 md:rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-blue-400">
            CrashVibe
          </div>

          <nav className="hidden md:block"></nav>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden p-2 text-xl text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="菜单"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* 移动端下拉菜单 */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black transition-all duration-300 overflow-hidden rounded-b-xl ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="p-4">
            <ul className="flex flex-col space-y-4">
              <MobileNavItem
                href="https://uptime.tblstudio.cn/dashboard"
                onClick={closeMenu}
              >
                状态
              </MobileNavItem>
              <MobileNavItem
                href="https://cvdocs.tblstudio.cn/"
                onClick={closeMenu}
              >
                small 教程
              </MobileNavItem>
              <MobileNavItem
                href="https://qm.qq.com/q/J9q03TFrkO"
                onClick={closeMenu}
              >
                速速加群
              </MobileNavItem>
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
        <div className="relative z-10 px-4 md:max-w-3xl text-white">
          {/* 标题优化 */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
            我们{" "}
            <span
              className={`transition-opacity duration-1000 ${
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

          {/* 副标题 */}
          <h3 className="text-sm md:text-lg mb-6 md:mb-8 px-2">
            开启一段属于你的全新旅程，和志同道合的玩家一起探索、建造、分享创意
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-4 mb-6 md:mb-8">
            <a
              href="https://cvdocs.tblstudio.cn/%E5%85%A5%E9%97%A8/how2join"
              className="px-6 py-3 md:py-2 bg-black rounded-lg hover:bg-opacity-80 transition-all border border-gray-600 text-sm md:text-base"
            >
              加入服务器
            </a>
            <a
              href="https://cvdocs.tblstudio.cn/intro"
              className="px-6 py-3 md:py-2 bg-blue-600 rounded-lg hover:bg-opacity-80 transition-all text-sm md:text-base"
            >
              服务器介绍
            </a>
          </div>

          {/* 服务器控制台优化 */}
          <div
            className="bg-gray-900 rounded-lg p-3 md:p-4 text-left font-mono cursor-pointer hover:bg-gray-800 transition-all"
            onClick={copyIP}
          >
            <div className="text-xs md:text-sm text-green-400 mb-1 md:mb-2">
              root@crashvive:~#
              <span className="text-gray-300">./connect_server</span>
            </div>
            <div className="text-xs md:text-base">
              Server IP:{" "}
              <span className="text-blue-400 select-all break-all">
                game.tblstudio.cn
              </span>
              <span className="ml-2 text-gray-500 text-xs">(点击复制)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// 移动端菜单项组件
const MobileNavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <li>
    <a
      href={href}
      className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

export default Home;
