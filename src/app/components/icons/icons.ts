import {
	// Navigation & UI
	Menu,
	X,
	ArrowRight,
	ArrowUp,
	ChevronUp,

	// Trust & Verification
	CheckCircle,
	Shield,
	Award,
	Verified,

	// Time & Process
	Clock,
	Zap,
	RotateCcw,
	Repeat,

	// People & Support
	Users,
	User,
	UserCheck,
	Headphones,
	Handshake,

	// Business & Finance
	TrendingUp,
	BarChart3,
	PieChart,
	DollarSign,
	Calculator,
	CreditCard,

	// Documents & Files
	FileText,
	FileCheck,
	FolderOpen,
	Upload,
	Download,
	Archive,

	// Technology & Digital
	Smartphone,
	Laptop,
	Server,
	Database,
	Cloud,
	Wifi,
	Settings,
	Cog,

	// Communication
	Mail,
	Phone,
	MessageSquare,
	Send,

	// Security
	Lock,
	ShieldCheck,
	Eye,
	EyeOff,

	// Success & Growth
	Star,
	Trophy,
	Target,
	Lightbulb,
	Rocket,

	// Location & Contact
	MapPin,
	Building,
	Home,

	// Social & External
	ExternalLink,
	Share2,
	Globe,
} from 'lucide-react';

// Semantic icon mapping for business concepts
export const BusinessIcons = {
	// Services
	documents: FileText,
	processes: Settings,
	accounting: Calculator,

	// Benefits
	timesSaving: Clock,
	automation: Zap,
	costReduction: TrendingUp,
	dataInsights: BarChart3,
	security: ShieldCheck,
	scalability: Rocket,

	// Trust indicators
	certified: Award,
	secure: Shield,
	support: Headphones,
	experience: Star,
	compliance: Shield,
	fastImplementation: Zap,
	partnership: Handshake,
	rating: Star,

	// Contact
	email: Mail,
	phone: Phone,
	location: MapPin,
	hours: Clock,
	business: Building,
	consultation: Users,

	// Navigation
	menu: Menu,
	close: X,
	arrow: ArrowRight,
	backToTop: ArrowUp,

	// Success/Status
	success: CheckCircle,
} as const;

// Re-export all icons for direct use
export {
	Menu,
	X,
	ArrowRight,
	ArrowUp,
	ChevronUp,
	CheckCircle,
	Shield,
	Award,
	Verified,
	Clock,
	Zap,
	RotateCcw,
	Repeat,
	Users,
	User,
	UserCheck,
	Headphones,
	Handshake,
	TrendingUp,
	BarChart3,
	PieChart,
	DollarSign,
	Calculator,
	CreditCard,
	FileText,
	FileCheck,
	FolderOpen,
	Upload,
	Download,
	Archive,
	Smartphone,
	Laptop,
	Server,
	Database,
	Cloud,
	Wifi,
	Settings,
	Cog,
	Mail,
	Phone,
	MessageSquare,
	Send,
	Lock,
	ShieldCheck,
	Eye,
	EyeOff,
	Star,
	Trophy,
	Target,
	Lightbulb,
	Rocket,
	MapPin,
	Building,
	Home,
	ExternalLink,
	Share2,
	Globe,
};
