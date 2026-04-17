import 'package:flutter/material.dart';

import '../core/theme/app_theme.dart';
import '../features/inspiration/inspiration_screen.dart';

class SahajaYogaApp extends StatelessWidget {
  const SahajaYogaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sahaja Yoga',
      debugShowCheckedModeBanner: false,
      theme: buildAppTheme(),
      home: const InspirationScreen(),
    );
  }
}

