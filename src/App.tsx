import { useState, useEffect, useRef } from 'react'
import logoUrl from '@/imports/pasted_text/icon-leaf-branch.svg'


// ─── Constants ────────────────────────────────────────────────────────────────
const FOREST = '#1B3B2B'
const FOREST_LIGHT = '#2A5440'
const AMBER = '#D97706'
const OFFWHITE = '#F9F8F3'
const BORDER = '#E5E7EB'
const MUTED = '#6B7280'

// ─── Responsive hook ──────────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200))
  useEffect(() => {
    const handler = () => setW(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return w
}

// ─── Hero Slides ─────────────────────────────────────────────────────────────
const heroSlides = [
  {
    id: 1,
    tag: '전문가 1:1 자문',
    title: '사업의 모든 문제,\n전문가가 바로 답합니다',
    sub: '법률 · 노무 · 세무 분야 인증 전문가와\n실시간 1:1 상담으로 빠르게 해결하세요',
    cta: '지금 상담 신청',
    image: new URL('./imports/tica0140005996.jpg', import.meta.url).href,
    imgOpacity: 0.8,
    accent: '#1B3B2B',
  },
  {
    id: 2,
    tag: '24시간 긴급 자문',
    title: '지금 당장 급한 문제,\n24시간 전문가 연결',
    sub: '세무조사 통보, 근로감독 예고, 법적 분쟁 —\n24시 긴급상담으로 즉시 연결됩니다',
    cta: '24시 긴급상담 신청',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop&auto=format',
    accent: '#D97706',
  },
  {
    id: 3,
    tag: '서류 검토 자문',
    title: '계약서부터 취업규칙까지\n전문가가 꼼꼼히 검토합니다',
    sub: '사업 운영에 필요한 모든 서류,\n리스크 없이 안전하게 검토받으세요',
    cta: '서류 검토 신청',
    // 기존: image: new URL('@/imports/tica1160018206.jpg', import.meta.url).href,
// 변경:
    // 현재 작성 중인 파일의 위치 기준으로 경로 수정 (예시: ../)
    image: new URL('./imports/tica1160018206.jpg', import.meta.url).href,
    imgOpacity: 0.8,
    accent: '#1B3B2B',
  },
]

// ─── Pricing Cards ─────────────────────────────────────────────────────────────
const pricingCards = [
  {
    name: '기본 1:1 온라인 자문',
    nameEn: 'Basic Online Advisory',
    price: '30,000',
    priceLabel: '30,000원~',
    unit: '건',
    desc: '매장 안에서 해결하는 채팅/통화 단순 1:1 질의응답. 법률·노무·세무 분야 전문가가 빠르게 답변드립니다.',
    features: ['채팅 또는 통화 선택 가능', '분야별 인증 전문가 매칭', '영업시간 내 당일 답변', '상담 내역 저장'],
    highlight: false,
    badge: null,
    priceNote: null,
  },
  {
    name: '24시 긴급상담',
    nameEn: '24h Emergency Consultation',
    price: '70,000',
    priceLabel: '70,000원~',
    unit: '건',
    desc: '당장 내일 해결해야 하는 한시적 고비 대응. 긴급 우선 배정으로 신속하게 연결됩니다.',
    features: ['긴급 우선 배정', '24시간 전담 전문가 연결', '즉각 대응 전략 수립', '사후 요약 정리 제공'],
    highlight: true,
    badge: '긴급 대응',
    priceNote: null,
  },
  {
    name: '서면/서식 검토 자문',
    nameEn: 'Document & Form Review',
    price: null,
    priceLabel: '별도 안내',
    unit: null,
    desc: '내용증명, 임대차 계약서, 근로계약서 등 작성 및 검토. 사전 견적 안내 후 진행됩니다.',
    features: ['내용증명·계약서 작성 및 검토', '임대차·근로계약서 특화', '법적 리스크 항목 점검', '사전 견적 안내 후 진행'],
    highlight: false,
    badge: null,
    priceNote: '서류 종류 및 분량에 따라 견적이 다릅니다.',
  },
]

// ─── Reviews (10 reviews, all confirmed Unsplash portrait photos) ─────────────
const reviews = [
  {
    name: '김정호',
    role: '외식업 · 삼겹살 전문점 운영',
    location: '서울 마포구',
    stars: 5,
    text: '직원이 갑자기 부당해고를 주장해서 당황했는데, 노무사 선생님이 2시간 만에 전화로 상황 정리해주셨어요. 실제 사건처럼 대응 방향을 정해주셔서 정말 안심이 됐습니다.',
    avatar: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '박수진',
    role: '뷰티 · 네일샵 2호점 운영',
    location: '경기 성남시',
    stars: 5,
    text: '프랜차이즈 계약서 검토를 맡겼는데 독소 조항 세 개를 찾아주셨어요. 법무사분이 실제 협상 문구까지 정리해주셔서 바로 계약 수정 요청할 수 있었습니다.',
    avatar: 'https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '이상훈',
    role: '리테일 · 편의점 3개점 운영',
    location: '인천 부평구',
    stars: 5,
    text: '세무조사 예고를 받고 처음엔 막막했어요. 세무사분이 당일 연락 주셔서 준비 서류부터 면담 전략까지 다 잡아주셨습니다. 결국 추징 없이 마무리됐어요.',
    avatar: 'https://images.unsplash.com/photo-1698072556956-1a5d2307a7a1?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '최미영',
    role: '서비스업 · 학원 운영',
    location: '부산 해운대구',
    stars: 5,
    text: '강사 계약서를 처음 만들면서 무엇을 넣어야 할지 전혀 몰랐는데, 노무사분이 표준 계약서 템플릿에 저희 상황에 맞는 조항까지 추가해주셨어요.',
    avatar: 'https://images.unsplash.com/photo-1695757002354-8bca71d087c7?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '강민준',
    role: '외식업 · 카페 프랜차이즈',
    location: '대전 유성구',
    stars: 5,
    text: '종합소득세 신고 시즌에 혼자 처리하다 실수를 발견했어요. 세무사분이 빠르게 수정 신고 방법을 알려주셔서 가산세 없이 마무리할 수 있었습니다.',
    avatar: 'https://images.unsplash.com/photo-1715243759229-1c18eba0c449?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '윤재원',
    role: '제조업 · 식품 가공업체 운영',
    location: '경기 화성시',
    stars: 5,
    text: '직원 산재 처리가 처음이라 막막했는데 노무사분이 서류 준비부터 공단 제출까지 전 과정을 안내해주셨어요. 생각보다 빠르게 처리돼서 감사했습니다.',
    avatar: 'https://images.unsplash.com/photo-1556360691-44c1b4a470ee?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '오혜진',
    role: '뷰티 · 피부관리숍 운영',
    location: '서울 강남구',
    stars: 5,
    text: '임대인이 계약 갱신을 거부해서 급하게 법률 자문을 받았어요. 변호사분이 권리금 보상 청구 방법을 구체적으로 알려주셔서 합의로 마무리할 수 있었습니다.',
    avatar: 'https://images.unsplash.com/photo-1668049221691-9925a45e2017?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '한동훈',
    role: '리테일 · 스포츠용품 판매',
    location: '광주 서구',
    stars: 5,
    text: '부가세 신고를 잘못해서 가산세가 붙을까봐 걱정됐는데, 세무사분이 수정 신고 가능 여부와 절차를 빠르게 확인해주셔서 안심이 됐어요.',
    avatar: 'https://images.unsplash.com/photo-1676641153249-d27fb6179ea3?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '임소연',
    role: '외식업 · 분식집 운영',
    location: '대구 중구',
    stars: 5,
    text: '아르바이트생과 임금 분쟁이 생겼는데 어떻게 대응해야 할지 몰랐어요. 노무사분이 증거 확보 방법부터 대응 전략까지 명쾌하게 설명해주셨습니다.',
    avatar: 'https://images.unsplash.com/photo-1679801823749-ddcc06fb6a98?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: '서진우',
    role: '서비스업 · 인테리어 업체 운영',
    location: '경남 창원시',
    stars: 5,
    text: '거래처가 공사 대금을 미루면서 내용증명을 보내야 했어요. 변호사분이 법적 효력 있는 문서를 직접 작성해주셔서 일주일 만에 대금을 받을 수 있었습니다.',
    avatar: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=80&h=80&fit=crop&auto=format',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: '우림에서 자문을 받을 수 있는 분야는 무엇인가요?',
    a: '법률(계약·분쟁·소송), 노무(근로계약·해고·산재), 세무(종합소득세·부가세·세무조사) 세 분야를 중심으로, 각 분야 인증 전문가와 1:1로 연결됩니다. 업종별 특화 전문가 매칭 서비스도 제공하고 있습니다.',
  },
  {
    q: '답변이 얼마나 빨리 오나요?',
    a: '단건 자문은 신청 후 24시간 이내 답변이 보장됩니다. 24시 긴급상담을 선택하시면 2시간 이내 전담 전문가가 직접 전화로 연락드립니다. 업무일 기준이 아닌 365일 동일하게 운영됩니다.',
  },
  {
    q: '전문가 자격은 어떻게 검증되나요?',
    a: '우림에 등록된 모든 전문가는 변호사·공인노무사·세무사 자격증 보유자로, 자격증 진위 확인 및 경력 검증 절차를 거칩니다. 전문가 프로필 페이지에서 자격 정보를 직접 확인하실 수 있습니다.',
  },
  {
    q: '상담 내용은 비밀이 보장되나요?',
    a: '네, 상담 내용은 전문가 직업 윤리 규정 및 우림 개인정보 처리방침에 따라 철저히 보호됩니다. 상담 내용은 제3자에게 제공되지 않으며, 서비스 개선 목적으로도 익명 처리 없이는 활용되지 않습니다.',
  },
  {
    q: '결제 후 환불이 가능한가요?',
    a: '전문가가 답변을 시작하기 전이라면 100% 환불이 가능합니다. 답변이 제공된 이후에는 환불이 어렵습니다만, 답변 품질에 심각한 문제가 있을 경우 고객센터를 통해 별도로 검토해 드립니다.',
  },
  {
    q: '모바일 앱도 있나요?',
    a: '네, iOS App Store와 Google Play에서 "우림" 앱을 다운로드하실 수 있습니다. 앱에서는 상담 신청부터 전문가 연결, 상담 내역 관리까지 더욱 편리하게 이용하실 수 있습니다.',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i <= count ? AMBER : '#E5E7EB'}>
          <path d="M8 1l1.854 3.756 4.146.602-3 2.924.708 4.128L8 10.25l-3.708 1.16L5 7.282 2 4.358l4.146-.602z" />
        </svg>
      ))}
    </div>
  )
}

function CheckIcon({ white }: { white?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={white ? 'rgba(255,255,255,0.2)' : FOREST} />
      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HoverBtn({ base, hover, children, onClick }: {
  base: React.CSSProperties; hover: React.CSSProperties
  children: React.ReactNode; onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      style={{ ...base, ...(hovered ? hover : {}), fontFamily: 'inherit' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-block', padding: '9px 20px', backgroundColor: '#E8F0EB', color: FOREST, borderRadius: 24, fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: '0.5px', lineHeight: 1 }}>
      {children}
    </span>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const w = useWindowWidth()
  const isMobile = w < 768

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: OFFWHITE,
      borderBottom: `1px solid ${scrolled ? BORDER : 'transparent'}`,
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      transition: 'border-color 300ms ease, box-shadow 300ms ease',
    }}>
      <div style={{ width: '100%', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* 로고 — 왼쪽 */}
        <img src={logoUrl} alt="우림 祐林" style={{ width: 70, height: 70, display: 'block', objectFit: 'contain', flexShrink: 0, marginBottom: 3 }} />

        {/* 우측 요소 그룹 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isMobile && (
            <>
              <HoverBtn base={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, border: `1.5px solid ${BORDER}`, borderRadius: 18, backgroundColor: 'white', cursor: 'pointer', transition: 'all 200ms' }} hover={{ backgroundColor: '#F3F4F6', border: '1.5px solid #D1D5DB' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={FOREST}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              </HoverBtn>
              <HoverBtn base={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, border: `1.5px solid ${BORDER}`, borderRadius: 18, backgroundColor: 'white', cursor: 'pointer', transition: 'all 200ms' }} hover={{ backgroundColor: '#F3F4F6', border: '1.5px solid #D1D5DB' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.2C3.22 1.43 3 1.84 3 2.31v19.38c0 .47.22.88.6 1.11l.1.06 10.86-10.86v-.26L3.7 1.14l-.1.06z" fill={FOREST} />
                  <path d="M18.18 15.77l-3.62-3.63v-.26l3.62-3.63.08.05 4.29 2.44c1.23.7 1.23 1.83 0 2.53l-4.29 2.44-.08.06z" fill={AMBER} />
                  <path d="M18.26 15.71L14.56 12 3.6 22.96c.4.43 1.07.48 1.82.05l12.84-7.3" fill="#EA4335" />
                  <path d="M3.6 1.04L14.56 12 18.26 8.3 5.42.99C4.67.56 4 .61 3.6 1.04z" fill="#34A853" />
                </svg>
              </HoverBtn>
            </>
          )}
          <div className="glow-border-wrap">
            <HoverBtn base={{ padding: isMobile ? '9px 14px' : '10px 18px', backgroundColor: AMBER, color: 'white', border: 'none', borderRadius: 24, fontWeight: 700, fontSize: isMobile ? 12 : 13, cursor: 'pointer', letterSpacing: '-0.2px', transition: 'all 200ms' }} hover={{ backgroundColor: '#B45309' }}>
              {isMobile ? '긴급상담' : '24시 긴급상담'}
            </HoverBtn>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero Slider ──────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [hoveredBtn, setHoveredBtn] = useState<'primary' | 'secondary' | null>(null)
  const [hoveredArrow, setHoveredArrow] = useState<'left' | 'right' | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const w = useWindowWidth()
  const isMobile = w < 768

  // stable auto-advance — no dependency on `current`
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const go = (idx: number) => {
    setCurrent((idx + heroSlides.length) % heroSlides.length)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
  }

  const slide = heroSlides[current]
  const isAmber = slide.accent === AMBER

  return (
    <section style={{ position: 'relative', height: isMobile ? '70vh' : '92vh', minHeight: 480, maxHeight: 760, overflow: 'hidden' }}>
      {/* All slides stacked — CSS opacity crossfade only, no layout change */}
      {heroSlides.map((s, i) => (
        <div key={s.id} style={{
          position: 'absolute', inset: 0,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 800ms ease',
          willChange: 'opacity',
        }}>
          <img src={s.image} alt={s.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: s.imgOpacity ?? 1, display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(27,59,43,0.86) 0%, rgba(27,59,43,0.55) 55%, rgba(27,59,43,0.22) 100%)' }} />
        </div>
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: isAmber ? AMBER : 'rgba(255,255,255,0.18)', borderRadius: 24, marginBottom: 20, width: 'fit-content' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'white', letterSpacing: '0.5px' }}>{slide.tag}</span>
        </div>
        <h1 style={{ fontSize: isMobile ? 30 : 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: 'white', lineHeight: 1.18, letterSpacing: '-1px', marginBottom: 18, whiteSpace: 'pre-line' }}>{slide.title}</h1>
        <p style={{ fontSize: isMobile ? 15 : 'clamp(16px, 1.8vw, 20px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 40, maxWidth: 540, whiteSpace: 'pre-line' }}>{slide.sub}</p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onMouseEnter={() => setHoveredBtn('primary')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: isMobile ? '15px 28px' : '18px 38px',
              backgroundColor: hoveredBtn === 'primary' ? (isAmber ? '#B45309' : FOREST) : (isAmber ? AMBER : 'white'),
              color: isAmber ? 'white' : (hoveredBtn === 'primary' ? 'white' : FOREST),
              border: 'none', borderRadius: 24, fontWeight: 700,
              fontSize: isMobile ? 14 : 16, cursor: 'pointer',
              boxShadow: hoveredBtn === 'primary' ? '0 6px 24px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.2)',
              transform: hoveredBtn === 'primary' ? 'translateY(-2px)' : 'none',
              transition: 'all 220ms ease', fontFamily: 'inherit',
            }}
          >{slide.cta}</button>

          {!isMobile && (
            <button
              onMouseEnter={() => setHoveredBtn('secondary')}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                padding: '18px 32px',
                backgroundColor: hoveredBtn === 'secondary' ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.15)',
                color: 'white', border: '1.5px solid rgba(255,255,255,0.4)',
                borderRadius: 24, fontWeight: 600, fontSize: 15, cursor: 'pointer',
                backdropFilter: 'blur(4px)', transform: hoveredBtn === 'secondary' ? 'translateY(-2px)' : 'none',
                transition: 'all 220ms ease', fontFamily: 'inherit',
              }}
            >서비스 소개 보기</button>
          )}
        </div>
      </div>

      {/* Arrows — hidden on mobile */}
      {!isMobile && (
        <>
          <button onClick={() => go(current - 1)}
            onMouseEnter={() => setHoveredArrow('left')}
            onMouseLeave={() => setHoveredArrow(null)}
            style={{
              position: 'absolute', left: 20, top: '50%',
              transform: hoveredArrow === 'left' ? 'translateY(-50%) scale(1.1)' : 'translateY(-50%)',
              zIndex: 20, width: 48, height: 48, borderRadius: '50%',
              backgroundColor: hoveredArrow === 'left' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.2)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              color: hoveredArrow === 'left' ? FOREST : 'white',
              fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'all 200ms ease',
            }}>‹</button>
          <button onClick={() => go(current + 1)}
            onMouseEnter={() => setHoveredArrow('right')}
            onMouseLeave={() => setHoveredArrow(null)}
            style={{
              position: 'absolute', right: 20, top: '50%',
              transform: hoveredArrow === 'right' ? 'translateY(-50%) scale(1.1)' : 'translateY(-50%)',
              zIndex: 20, width: 48, height: 48, borderRadius: '50%',
              backgroundColor: hoveredArrow === 'right' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.2)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              color: hoveredArrow === 'right' ? FOREST : 'white',
              fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'all 200ms ease',
            }}>›</button>
        </>
      )}

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: 8 }}>
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 4, backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.45)', border: 'none', cursor: 'pointer', transition: 'all 300ms ease', padding: 0 }} />
        ))}
      </div>
    </section>
  )
}

// ─── Overview Banner ──────────────────────────────────────────────────────────
function OverviewBanner() {
  const w = useWindowWidth()
  const isMobile = w < 640
  const stats = [
    { value: '14,200+', label: '등록 사업자' },
    { value: '98.3%', label: '상담 만족도' },
    { value: '780+', label: '전문가 파트너' },
    { value: '2시간↓', label: '평균 초기 응답' },
  ]
  return (
    <section style={{ backgroundColor: FOREST, padding: isMobile ? '48px 20px' : '72px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ textAlign: 'center', fontSize: isMobile ? 20 : 'clamp(17px, 2vw, 22px)', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: isMobile ? 36 : 56, letterSpacing: '-0.3px', lineHeight: 1.6 }}>
          전국 소상공인과 자영업자가 우림을 선택하는 이유
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 28 : 24 }}>
          {stats.map((s) => (
            <div key={s.value} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: isMobile ? 32 : 'clamp(28px, 4vw, 60px)', fontWeight: 300, color: 'white', letterSpacing: '-1px', marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Consultation Form ─────────────────────────────────────────────────────────
function ConsultationForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [industry, setIndustry] = useState('')
  const [industryOpen, setIndustryOpen] = useState(false)
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [urgency, setUrgency] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const w = useWindowWidth()
  const isMobile = w < 768

  const industries = ['외식업', '리테일', '뷰티', '서비스업', '제조업', '기타']
  const categories = ['법률', '노무', '세무']
  const isReady = agreed && name && phone && industry && category

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 15px',
    border: `1.5px solid ${BORDER}`, borderRadius: 24, fontSize: 15,
    backgroundColor: 'white', outline: 'none', color: '#111827',
    fontFamily: 'inherit', transition: 'border-color 200ms',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isReady) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '104px 24px', backgroundColor: OFFWHITE }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <SectionBadge>1:1 맞춤 상담 신청</SectionBadge>
          <h2 style={{ fontSize: isMobile ? 26 : 'clamp(30px, 3.5vw, 40px)', fontWeight: 800, color: '#111827', letterSpacing: '-0.8px', lineHeight: 1.25, margin: '0 0 14px' }}>전문가 상담을 신청해보세요</h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: MUTED, lineHeight: 1.6 }}>신청 후 24시간 이내 담당 전문가가 직접 연락드립니다</p>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.07)', border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
          {submitted ? (
            <div style={{ padding: isMobile ? 48 : 80, textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: FOREST, marginBottom: 12 }}>상담 신청이 완료되었습니다</h3>
              <p style={{ color: MUTED, fontSize: 15 }}>담당 전문가가 24시간 이내 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                {/* Left */}
                <div style={{ padding: isMobile ? 24 : 48, borderRight: isMobile ? 'none' : `1px solid ${BORDER}`, borderBottom: isMobile ? `1px solid ${BORDER}` : 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>성함 <span style={{ color: AMBER }}>*</span></label>
                    <input style={inputStyle} placeholder="홍길동" value={name} onChange={(e) => setName(e.target.value)}
                      onFocus={(e) => (e.target.style.border = `1.5px solid ${FOREST}`)}
                      onBlur={(e) => (e.target.style.border = `1.5px solid ${BORDER}`)} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>연락처 <span style={{ color: AMBER }}>*</span></label>
                    <input style={inputStyle} placeholder="010-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)}
                      onFocus={(e) => (e.target.style.border = `1.5px solid ${FOREST}`)}
                      onBlur={(e) => (e.target.style.border = `1.5px solid ${BORDER}`)} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>추가 문의 내용</label>
                    <textarea style={{ ...inputStyle, resize: 'none', height: 140, lineHeight: 1.6 }}
                      placeholder="문의하실 내용을 자유롭게 적어주세요."
                      value={message} onChange={(e) => setMessage(e.target.value)}
                      onFocus={(e) => (e.target.style.border = `1.5px solid ${FOREST}`)}
                      onBlur={(e) => (e.target.style.border = `1.5px solid ${BORDER}`)} />
                  </div>
                </div>

                {/* Right */}
                <div style={{ padding: isMobile ? 24 : 48, display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {/* Industry */}
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>업종 선택 <span style={{ color: AMBER }}>*</span></label>
                    <div style={{ position: 'relative' }}>
                      <button type="button" onClick={() => setIndustryOpen(!industryOpen)}
                        style={{ width: '100%', padding: '13px 15px', border: `1.5px solid ${industryOpen ? FOREST : BORDER}`, borderRadius: 24, backgroundColor: industryOpen ? '#F0F7F3' : 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 15, color: industry ? '#111827' : '#9CA3AF', textAlign: 'left', fontFamily: 'inherit', transition: 'all 200ms ease' }}>
                        {industry || '업종을 선택해주세요'}
                        <span style={{ transform: industryOpen ? 'rotate(180deg)' : 'none', transition: 'transform 250ms ease', fontSize: 12 }}>▼</span>
                      </button>
                      {industryOpen && (
                        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, backgroundColor: 'white', border: `1.5px solid ${BORDER}`, borderRadius: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.1)', zIndex: 50, overflow: 'hidden' }}>
                          {industries.map((ind) => (
                            <button key={ind} type="button"
                              onMouseEnter={() => setHoveredIndustry(ind)}
                              onMouseLeave={() => setHoveredIndustry(null)}
                              onClick={() => { setIndustry(ind); setIndustryOpen(false) }}
                              style={{ width: '100%', padding: '12px 15px', border: 'none', backgroundColor: industry === ind ? '#E8F0EB' : hoveredIndustry === ind ? '#F0F7F3' : 'transparent', color: industry === ind ? FOREST : hoveredIndustry === ind ? FOREST_LIGHT : '#374151', fontWeight: industry === ind ? 600 : 400, fontSize: 15, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', transition: 'all 160ms ease' }}>
                              {ind}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>상담 분야 <span style={{ color: AMBER }}>*</span></label>
                    <div style={{ display: 'flex', gap: 10 }}>
                      {categories.map((cat) => (
                        <button key={cat} type="button" onClick={() => setCategory(cat)}
                          style={{ flex: 1, padding: '11px 0', borderRadius: 24, border: `1.5px solid ${category === cat ? FOREST : BORDER}`, backgroundColor: category === cat ? FOREST : 'white', color: category === cat ? 'white' : '#6B7280', fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 180ms ease' }}>
                          {cat}
                        </button>
                      ))}
                    </div>
                    {category && (
                      <div style={{ marginTop: 10, padding: '9px 13px', backgroundColor: '#E8F0EB', borderRadius: 10, fontSize: 13, color: FOREST, fontWeight: 500 }}>
                        {category === '법률' && '계약 분쟁, 소송 대응, 임대차 문제 등 법률 전반'}
                        {category === '노무' && '근로계약, 해고·퇴직금, 산재·4대보험 등 노무 전반'}
                        {category === '세무' && '종합소득세, 부가세, 세무조사 대응 등 세무 전반'}
                      </div>
                    )}
                  </div>

                  {/* Urgency toggle */}
                  <div onClick={() => setUrgency(!urgency)}
                    style={{ padding: 15, backgroundColor: urgency ? '#FEF3C7' : '#FAFAFA', borderRadius: 24, border: `1.5px solid ${urgency ? '#FDE68A' : BORDER}`, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', transition: 'all 250ms ease' }}>
                    <span style={{ fontSize: 20, transition: 'transform 250ms ease', transform: urgency ? 'rotate(-15deg) scale(1.2)' : 'none' }}>⚡</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: urgency ? '#92400E' : '#374151', transition: 'color 200ms' }}>24시 긴급상담 추가</div>
                      <div style={{ fontSize: 12, color: urgency ? '#B45309' : MUTED, transition: 'color 200ms' }}>2시간 내 전화 연결 +40,000원</div>
                    </div>
                    <div style={{ position: 'relative', width: 44, height: 24, borderRadius: 12, backgroundColor: urgency ? AMBER : '#D1D5DB', transition: 'background-color 250ms ease', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', top: 3, left: urgency ? 23 : 3, width: 18, height: 18, borderRadius: '50%', backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', transition: 'left 250ms ease' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div style={{ padding: isMobile ? '18px 24px' : '22px 48px', borderTop: `1px solid ${BORDER}`, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between', gap: 16, backgroundColor: '#FAFAFA' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: '#374151' }}>
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ width: 18, height: 18, accentColor: FOREST, cursor: 'pointer' }} />
                  <span><span style={{ fontWeight: 600 }}>개인정보 수집·이용에 동의합니다</span><span style={{ color: MUTED }}> (필수)</span></span>
                </label>
                <SubmitBtn active={!!isReady} fullWidth={isMobile} />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function SubmitBtn({ active, fullWidth }: { active: boolean; fullWidth?: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button type="submit"
      onMouseEnter={() => active && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '15px 36px', width: fullWidth ? '100%' : 'auto',
        backgroundColor: active ? (hovered ? FOREST_LIGHT : FOREST) : '#D1D5DB',
        color: active ? 'white' : '#9CA3AF',
        border: 'none', borderRadius: 24, fontWeight: 700, fontSize: 16,
        cursor: active ? 'pointer' : 'not-allowed', fontFamily: 'inherit',
        transform: active && hovered ? 'translateY(-2px)' : 'none',
        boxShadow: active ? (hovered ? '0 8px 24px rgba(27,59,43,0.4)' : '0 4px 16px rgba(27,59,43,0.3)') : 'none',
        transition: 'all 200ms ease', whiteSpace: 'nowrap',
      }}>
      상담 신청하기 →
    </button>
  )
}

// ─── Pricing Section ──────────────────────────────────────────────────────────
function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)
  const w = useWindowWidth()
  const isMobile = w < 768

  return (
    <section style={{ padding: isMobile ? '72px 20px' : '104px 24px', backgroundColor: '#F3F7F4' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <SectionBadge>건별 자문 요금</SectionBadge>
          <h2 style={{ fontSize: isMobile ? 26 : 'clamp(30px, 3.5vw, 40px)', fontWeight: 800, color: '#111827', letterSpacing: '-0.8px', lineHeight: 1.25, margin: '0 0 14px' }}>필요한 만큼만, 합리적으로</h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: MUTED, lineHeight: 1.6 }}>월 구독 없이 건별로 결제하세요. 숨겨진 비용은 없습니다.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
          {pricingCards.map((card) => {
            const isHovered = hoveredCard === card.name
            const isBtnHovered = hoveredBtn === card.name
            return (
              <div key={card.name}
                onMouseEnter={() => setHoveredCard(card.name)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: card.highlight ? FOREST : (isHovered ? '#F0F7F4' : 'white'),
                  borderRadius: 24, padding: 32,
                  border: `1.5px solid ${card.highlight ? FOREST : (isHovered ? '#A8CDB6' : BORDER)}`,
                  boxShadow: isHovered ? '0 12px 40px rgba(27,59,43,0.16)' : card.highlight ? '0 8px 32px rgba(27,59,43,0.25)' : '0 2px 12px rgba(0,0,0,0.05)',
                  position: 'relative', display: 'flex', flexDirection: 'column', gap: 18,
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  willChange: 'transform, box-shadow',
                  backfaceVisibility: 'hidden',
                  transition: 'transform 260ms ease, box-shadow 260ms ease, background-color 200ms ease, border-color 200ms ease',
                }}>
                {card.badge && (
                  <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', backgroundColor: AMBER, color: 'white', padding: '5px 15px', borderRadius: 24, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {card.badge}
                  </div>
                )}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: card.highlight ? 'rgba(255,255,255,0.6)' : MUTED, marginBottom: 4 }}>{card.nameEn}</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: card.highlight ? 'white' : '#111827' }}>{card.name}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                  <span style={{ fontSize: card.price ? 36 : 26, fontWeight: 800, color: card.highlight ? 'white' : FOREST, letterSpacing: '-1px' }}>
                    {card.price ? `₩${card.price}` : card.priceLabel}
                  </span>
                  {card.price && <span style={{ fontSize: 13, color: card.highlight ? 'rgba(255,255,255,0.6)' : MUTED }}>~ / {card.unit}</span>}
                </div>
                <div style={{ paddingBottom: 14, borderBottom: `1px solid ${card.highlight ? 'rgba(255,255,255,0.15)' : BORDER}` }}>
                  <p style={{ fontSize: 14, color: card.highlight ? 'rgba(255,255,255,0.75)' : MUTED, lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                  {card.priceNote && <p style={{ fontSize: 12, color: card.highlight ? 'rgba(255,255,255,0.5)' : '#9CA3AF', marginTop: 7, marginBottom: 0 }}>* {card.priceNote}</p>}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {card.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14 }}>
                      <span style={{ flexShrink: 0 }}><CheckIcon white={card.highlight} /></span>
                      <span style={{ color: card.highlight ? 'rgba(255,255,255,0.85)' : '#374151' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onMouseEnter={() => setHoveredBtn(card.name)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    marginTop: 'auto', padding: '14px 0',
                    backgroundColor: card.highlight ? (isBtnHovered ? '#F0F7F4' : 'white') : (isBtnHovered ? FOREST_LIGHT : FOREST),
                    color: card.highlight ? (isBtnHovered ? FOREST_LIGHT : FOREST) : 'white',
                    border: 'none', borderRadius: 24, fontWeight: 700, fontSize: 15,
                    cursor: 'pointer', fontFamily: 'inherit',
                    boxShadow: isBtnHovered ? '0 4px 14px rgba(27,59,43,0.28)' : 'none',
                    transition: 'background-color 200ms ease, box-shadow 200ms ease',
                  }}>
                  {card.price ? `${card.name} 신청하기` : '견적 문의하기'}
                </button>
              </div>
            )
          })}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: MUTED, marginTop: 28 }}>VAT 포함 금액입니다. 전문가 답변 시작 전까지 전액 환불 가능합니다.</p>
      </div>
    </section>
  )
}

// ─── Reviews Carousel ─────────────────────────────────────────────────────────
function ReviewsCarousel() {
  const w = useWindowWidth()
  const isMobile = w < 640
  const isTablet = w >= 640 && w < 1024
  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3
  const cardWidth = isMobile ? Math.min(w - 48, 340) : 340
  const gap = 20
  const total = reviews.length
  const maxIndex = total - visibleCount
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)
  }

  useEffect(() => {
    if (!isPaused) startAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [isPaused, maxIndex])

  const goTo = (i: number) => {
    setIndex(Math.max(0, Math.min(maxIndex, i)))
    startAuto()
  }

  const offset = index * (cardWidth + gap)

  return (
    <section style={{ padding: isMobile ? '72px 0' : '104px 0', backgroundColor: OFFWHITE, overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', marginBottom: 48 }}>
        <div style={{ textAlign: 'center' }}>
          <SectionBadge>실제 사업자 후기</SectionBadge>
          <h2 style={{ fontSize: isMobile ? 26 : 'clamp(30px, 3.5vw, 40px)', fontWeight: 800, color: '#111827', letterSpacing: '-0.8px', lineHeight: 1.25, margin: 0 }}>우림으로 문제를 해결한 사업자들</h2>
        </div>
      </div>

      <div style={{ position: 'relative', padding: '0 20px' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap, transform: `translateX(-${offset}px)`, transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
            {reviews.map((r) => (
              <ReviewCard key={r.name} r={r} cardWidth={cardWidth} />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{ width: i === index ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: i === index ? FOREST : '#D1D5DB', border: 'none', cursor: 'pointer', transition: 'all 300ms ease', padding: 0 }} />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 14 }}>
          <ReviewArrowBtn disabled={index === 0} onClick={() => goTo(index - 1)} dir="left" />
          <ReviewArrowBtn disabled={index >= maxIndex} onClick={() => goTo(index + 1)} dir="right" />
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ r, cardWidth }: { r: typeof reviews[0]; cardWidth: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        width: cardWidth, flexShrink: 0, backgroundColor: 'white', borderRadius: 24, padding: 26,
        border: `1.5px solid ${hovered ? '#A8CDB6' : BORDER}`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        display: 'flex', flexDirection: 'column', gap: 14,
        transition: 'border-color 250ms ease',
      }}>
      <Stars count={r.stars} />
      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, flex: 1, margin: 0 }}>"{r.text}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, paddingTop: 12, borderTop: `1px solid ${BORDER}` }}>
        <img src={r.avatar} alt={r.name}
          style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', backgroundColor: '#E5E7EB', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{r.name}</div>
          <div style={{ fontSize: 12, color: MUTED }}>{r.role}</div>
          <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 1 }}>{r.location}</div>
        </div>
      </div>
    </div>
  )
}

function ReviewArrowBtn({ disabled, onClick, dir }: { disabled: boolean; onClick: () => void; dir: 'left' | 'right' }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 44, height: 44, borderRadius: '50%',
        border: `1.5px solid ${hovered ? FOREST : BORDER}`,
        backgroundColor: hovered ? FOREST : 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: disabled ? 0.35 : 1, color: hovered ? 'white' : FOREST,
        transform: hovered ? 'scale(1.08)' : 'none',
        transition: 'all 200ms ease',
      }}>
      {dir === 'left' ? '‹' : '›'}
    </button>
  )
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  const w = useWindowWidth()
  const isMobile = w < 768
  return (
    <section style={{ padding: isMobile ? '72px 20px' : '104px 24px', backgroundColor: '#F3F7F4' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <SectionBadge>자주 묻는 질문</SectionBadge>
          <h2 style={{ fontSize: isMobile ? 26 : 'clamp(30px, 3.5vw, 40px)', fontWeight: 800, color: '#111827', letterSpacing: '-0.8px', lineHeight: 1.25, margin: 0 }}>궁금한 점을 해결해드립니다</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ backgroundColor: open === i ? '#E8F0EB' : 'white', borderRadius: 24, border: `1.5px solid ${open === i ? '#C4D9CB' : BORDER}`, overflow: 'hidden', transition: 'all 200ms ease' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', padding: '20px 22px', border: 'none', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', gap: 14 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: open === i ? FOREST : '#111827', lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: open === i ? FOREST : '#F3F4F6', color: open === i ? 'white' : '#6B7280', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, fontWeight: 300, transition: 'all 200ms ease' }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 22px 20px', fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Band ─────────────────────────────────────────────────────────────────
function CTABand() {
  const w = useWindowWidth()
  const isMobile = w < 640
  return (
    <section style={{ padding: isMobile ? '60px 20px' : '80px 24px', backgroundColor: 'rgba(27, 59, 43, 1)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? 24 : 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.8px', lineHeight: 1.25, marginBottom: 14 }}>지금 당장 해결해야 할 문제가 있으신가요?</h2>
        <p style={{ fontSize: isMobile ? 15 : 17, color: '#ffffff', marginBottom: 40, lineHeight: 1.6 }}>24시 긴급상담으로 2시간 이내 전문가와 연결됩니다</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="glow-border-wrap">
            <HoverBtn base={{ padding: isMobile ? '16px 32px' : '19px 42px', backgroundColor: AMBER, color: 'white', border: 'none', borderRadius: 24, fontWeight: 700, fontSize: isMobile ? 15 : 17, cursor: 'pointer', transition: 'all 200ms ease' }} hover={{ backgroundColor: '#B45309', transform: 'translateY(-2px)' }}>
              24시 긴급상담 신청
            </HoverBtn>
          </div>
          <HoverBtn base={{ padding: isMobile ? '16px 28px' : '19px 38px', backgroundColor: 'white', color: FOREST, border: `1.5px solid ${FOREST}`, borderRadius: 24, fontWeight: 600, fontSize: isMobile ? 14 : 16, cursor: 'pointer', transition: 'all 200ms ease' }} hover={{ backgroundColor: '#E8F0EB', transform: 'translateY(-2px)' }}>
            일반 상담 신청
          </HoverBtn>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const w = useWindowWidth()
  const isMobile = w < 768
  const columns = [
    { title: '서비스', links: ['단건 자문', '24시 긴급상담', '서류 검토', '전문가 찾기'] },
    { title: '분야', links: ['법률 자문', '노무 자문', '세무 자문', '업종별 특화 자문'] },
    { title: '회사', links: ['우림 소개', '전문가 파트너 지원', '블로그', '공지사항'] },
    { title: '고객지원', links: ['자주 묻는 질문', '1:1 문의', '이용약관', '개인정보 처리방침'] },
  ]
  return (
    <footer style={{ backgroundColor: '#233F2E', padding: isMobile ? '48px 20px 32px' : '64px 24px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr 1fr', gap: isMobile ? 32 : 48, marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: 'white' }}>우림</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255, 255, 255, 0.83)' }}>祐林</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 260 }}>전국 소상공인과 자영업자를 위한 전문가 1:1 자문 플랫폼.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.8px', marginBottom: 14, textTransform: 'uppercase' }}>{col.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 150ms' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 우림 祐林. All rights reserved. | 사업자등록번호: 123-45-67890</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>고객센터: 02-1234-5678 | help@woorim.kr</div>
        </div>
      </div>
    </footer>
  )
}

// ─── AI Chat FAB ──────────────────────────────────────────────────────────────
function AIChatFAB() {
  const [hovered, setHovered] = useState(false)
  return (
    <>
      {hovered && (
        <div style={{
          position: 'fixed', bottom: 100, right: 28, zIndex: 200,
          backgroundColor: 'white', borderRadius: 16, padding: '12px 16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.14)', border: `1px solid ${BORDER}`, whiteSpace: 'nowrap',
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: FOREST, marginBottom: 2 }}>AI 채팅 상담</div>
          <div style={{ fontSize: 12, color: MUTED }}>24시간 즉시 답변 가능</div>
          <div style={{ position: 'absolute', bottom: -7, right: 22, width: 14, height: 14, backgroundColor: 'white', border: `1px solid ${BORDER}`, borderTop: 'none', borderLeft: 'none', transform: 'rotate(45deg)' }} />
        </div>
      )}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 200,
          width: 60, height: 60, borderRadius: '50%', backgroundColor: 'rgb(55, 115, 84)',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered ? '0 8px 28px rgba(27,59,43,0.45)' : '0 4px 16px rgba(27,59,43,0.35)',
          animation: hovered ? 'ai-float 1.4s ease-in-out infinite' : 'none',
          transition: 'box-shadow 200ms ease',
        }}
        aria-label="AI 채팅 상담">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H9l-5 4V6z" fill="white" fillOpacity="0.95" />
          <path d="M10 10h8M10 14h5" stroke={FOREST} strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="21" cy="7" r="4" fill={AMBER} />
          <path d="M21 5v4M19 7h4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
    </>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: "'Noto Sans KR', 'Inter', system-ui, sans-serif", backgroundColor: OFFWHITE }}>
      <Navbar />
      <div style={{ paddingTop: 64 }}>
        <HeroSlider />
        <OverviewBanner />
        <ConsultationForm />
        <PricingSection />
        <ReviewsCarousel />
        <FAQSection />
        <CTABand />
        <Footer />
      </div>
      <AIChatFAB />
    </div>
  )
}
