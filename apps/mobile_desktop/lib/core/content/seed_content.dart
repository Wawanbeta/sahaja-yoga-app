class SeedInspiration {
  const SeedInspiration({
    required this.title,
    required this.body,
    required this.source,
  });

  final String title;
  final String body;
  final String source;
}

const todayInspiration = SeedInspiration(
  title: 'Beginne in Stille',
  body: 'Nimm dir einen Moment, um ruhig zu werden und die Aufmerksamkeit nach innen zu lenken.',
  source: 'Redaktioneller Seed-Content, noch nicht freigegeben',
);

