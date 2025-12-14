import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * 共通レイアウト用コンテナ
 * - 横幅を1200pxに揃えつつ、モバイルでも左右余白を確保
 * - 背景はセクション側でフルブリードさせ、主要コンテンツのみを揃える
 */
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
