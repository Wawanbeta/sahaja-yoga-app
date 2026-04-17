import 'package:flutter/material.dart';

ThemeData buildAppTheme() {
  const ink = Color(0xFF1F2523);
  const leaf = Color(0xFF2F6F5E);
  const mist = Color(0xFFEAF1EE);
  const paper = Color(0xFFFCFCFA);

  return ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: leaf,
      brightness: Brightness.light,
      surface: paper,
    ),
    scaffoldBackgroundColor: paper,
    textTheme: const TextTheme(
      headlineMedium: TextStyle(
        fontSize: 32,
        fontWeight: FontWeight.w700,
        color: ink,
        height: 1.2,
      ),
      titleLarge: TextStyle(
        fontSize: 22,
        fontWeight: FontWeight.w700,
        color: ink,
      ),
      bodyLarge: TextStyle(
        fontSize: 18,
        height: 1.55,
        color: ink,
      ),
      bodyMedium: TextStyle(
        fontSize: 16,
        height: 1.5,
        color: ink,
      ),
    ),
    cardTheme: CardTheme(
      color: mist,
      elevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        minimumSize: const Size(120, 48),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        minimumSize: const Size(120, 48),
      ),
    ),
  );
}

