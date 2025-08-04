import React from 'react';
import * as S from './ThemeToggleButton.styles';

interface ThemeToggleButtonProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ isDarkMode, toggleTheme }) => (
    <S.ThemeToggleButton onClick={toggleTheme}>
        {isDarkMode ? '🌞' : '🌙'}
    </S.ThemeToggleButton>
);

export default ThemeToggleButton;