import 'package:flutter/material.dart';

import '../../core/config/app_config.dart';

class MediaLibraryScreen extends StatefulWidget {
  const MediaLibraryScreen({super.key});

  @override
  State<MediaLibraryScreen> createState() => _MediaLibraryScreenState();
}

class _MediaLibraryScreenState extends State<MediaLibraryScreen> {
  final TextEditingController _searchController = TextEditingController(text: 'meditation');

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Mediathek')),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(24),
          children: [
            Text(
              'Talks suchen',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 12),
            Text(
              'Die App wird hier ueber die eigene API suchen. Externe Quellen bleiben hinter dem Gateway gekapselt.',
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _searchController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Suchbegriff',
              ),
            ),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: () {
                final query = Uri.encodeQueryComponent(_searchController.text.trim());
                final url = '${appConfig.apiBaseUrl}/v1/talks/search?q=$query';
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Naechster API-Aufruf: $url')),
                );
              },
              child: const Text('Suche vorbereiten'),
            ),
            const SizedBox(height: 24),
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'R1-Status',
                      style: Theme.of(context).textTheme.titleLarge,
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Backend-Endpunkte fuer Suche, Talk-Details und Metadaten sind vorbereitet. Der echte App-HTTP-Client folgt nach Installation der Flutter-Toolchain.',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

