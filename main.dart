import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Subject Chooser',
      theme: ThemeData(
        useMaterial3: true,
        textTheme: GoogleFonts.nunitoTextTheme(),
      ),
      home: const ChooseSubjectScreen(),
    );
  }
}

class ChooseSubjectScreen extends StatelessWidget {
  const ChooseSubjectScreen({super.key});

  // Data for subjects
  final List<Map<String, dynamic>> subjects = const [
    {
      'name': 'Biology',
      'color': Color(0xFF6ECFA8),
      'icon': Icons.biotech, // Placeholder icon
      'asset': 'assets/char_biology.png',
    },
    {
      'name': 'Chemistry',
      'color': Color(0xFFFFD562),
      'icon': Icons.science,
      'asset': 'assets/char_chemistry.png',
    },
    {
      'name': 'English',
      'color': Color(0xFFFF7B7B),
      'icon': Icons.menu_book,
      'asset': 'assets/char_english.png',
    },
    {
      'name': 'Math',
      'color': Color(0xFF8B7EF8),
      'icon': Icons.calculate,
      'asset': 'assets/char_math.png',
    },
    {
      'name': 'Physics',
      'color': Color(0xFF5AB6FF),
      'icon': Icons.atom, // Need custom icon or similar
      'asset': 'assets/char_physics.png',
    },
    {
      'name': 'History',
      'color': Color(0xFFC48E73),
      'icon': Icons.account_balance,
      'asset': 'assets/char_history.png',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDF8EF),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
          child: Column(
            children: [
              const SizedBox(height: 20),
              // Header
              Text(
                'Choose Your\nSubject.',
                textAlign: TextAlign.center,
                style: GoogleFonts.nunito(
                  fontSize: 32,
                  fontWeight: FontWeight.w800,
                  color: Colors.black87,
                  height: 1.2,
                ),
              ),
              const SizedBox(height: 32),
              
              // Grid
              Expanded(
                child: GridView.builder(
                  itemCount: subjects.length,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 16,
                    mainAxisSpacing: 16,
                    childAspectRatio: 0.85, // Adjust for card height
                  ),
                  itemBuilder: (context, index) {
                    final subject = subjects[index];
                    return SubjectCard(
                      name: subject['name'] as String,
                      color: subject['color'] as Color,
                      iconData: subject['icon'] as IconData,
                      assetPath: subject['asset'] as String,
                    );
                  },
                ),
              ),
              
              const SizedBox(height: 20),
              
              // Bottom Button
              SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF55B978),
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    elevation: 4,
                  ),
                  child: Text(
                    'Continue',
                    style: GoogleFonts.nunito(
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
            ],
          ),
        ),
      ),
    );
  }
}

class SubjectCard extends StatelessWidget {
  final String name;
  final Color color;
  final IconData iconData;
  final String assetPath;

  const SubjectCard({
    super.key,
    required this.name,
    required this.color,
    required this.iconData,
    required this.assetPath,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // 1. Container
        Container(
          width: double.infinity,
          height: double.infinity,
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(24),
            boxShadow: [
              BoxShadow(
                color: color.withOpacity(0.3),
                blurRadius: 8,
                offset: const Offset(0, 4),
              ),
            ],
          ),
        ),

        // 2. Icon Circle (Centered)
        Align(
          alignment: const Alignment(0, -0.3), // Slightly above center
          child: Container(
            width: 60,
            height: 60,
            decoration: const BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
            ),
            child: Icon(
              iconData,
              color: color, // Icon color matches card
              size: 32,
            ),
          ),
        ),

        // 3. Label (Below Icon)
        Align(
          alignment: const Alignment(0, 0.4), // Below center
          child: Text(
            name,
            style: GoogleFonts.nunito(
              color: Colors.white,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),

        // 4. Character Asset (Peeking Bottom Right)
        Positioned(
          bottom: 8,
          right: 8,
          child: Image.asset(
            assetPath,
            width: 40, // Adjust size as needed
            height: 40,
            errorBuilder: (context, error, stackTrace) {
              // Placeholder if asset is missing
              return const SizedBox(width: 40, height: 40); 
            },
          ),
        ),
      ],
    );
  }
}



