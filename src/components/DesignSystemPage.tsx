import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { Input, Textarea } from './ui/Input';
import { Tag } from './ui/Tag';
import { Card, CardHeader, CardContent } from './ui/Card';

interface DesignSystemPageProps {
  onClose: () => void;
}

export function DesignSystemPage({ onClose }: DesignSystemPageProps) {
  return (
    <div className="fixed inset-0 bg-white z-[100] overflow-y-auto">
      <div className="max-w-6xl mx-auto" style={{ padding: '64px 32px' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 
              className="text-gray-900"
              style={{
                fontSize: '48px',
                lineHeight: '1.2',
                fontWeight: 600,
                marginBottom: '12px'
              }}
            >
              Design System
            </h1>
            <p 
              className="text-gray-600"
              style={{ fontSize: '18px', lineHeight: '1.5' }}
            >
              Component library and style guide for Shehroz Shafiq Portfolio
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close design system"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {/* Colors */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Colors
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
              <div>
                <div 
                  className="rounded-xl mb-3 border border-gray-200" 
                  style={{ height: '120px', backgroundColor: '#0d9488' }}
                ></div>
                <p className="text-gray-900" style={{ fontSize: '16px', fontWeight: 600 }}>Teal 600</p>
                <p className="text-gray-600" style={{ fontSize: '14px' }}>#0d9488</p>
              </div>
              <div>
                <div 
                  className="rounded-xl mb-3 border border-gray-200" 
                  style={{ height: '120px', backgroundColor: '#f0fdfa' }}
                ></div>
                <p className="text-gray-900" style={{ fontSize: '16px', fontWeight: 600 }}>Teal 50</p>
                <p className="text-gray-600" style={{ fontSize: '14px' }}>#f0fdfa</p>
              </div>
              <div>
                <div 
                  className="rounded-xl mb-3 border border-gray-200" 
                  style={{ height: '120px', backgroundColor: '#111827' }}
                ></div>
                <p className="text-gray-900" style={{ fontSize: '16px', fontWeight: 600 }}>Gray 900</p>
                <p className="text-gray-600" style={{ fontSize: '14px' }}>#111827</p>
              </div>
              <div>
                <div 
                  className="rounded-xl mb-3 border border-gray-200" 
                  style={{ height: '120px', backgroundColor: '#f9fafb' }}
                ></div>
                <p className="text-gray-900" style={{ fontSize: '16px', fontWeight: 600 }}>Gray 50</p>
                <p className="text-gray-600" style={{ fontSize: '14px' }}>#f9fafb</p>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Typography
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h1 className="text-gray-900" style={{ fontSize: '56px', lineHeight: '1.2', fontWeight: 600 }}>
                  Heading 1
                </h1>
                <p className="text-gray-500 mt-2" style={{ fontSize: '14px' }}>56px / 600 weight / 1.2 line-height</p>
              </div>
              <div>
                <h2 className="text-gray-900" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 600 }}>
                  Heading 2
                </h2>
                <p className="text-gray-500 mt-2" style={{ fontSize: '14px' }}>40px / 600 weight / 1.3 line-height</p>
              </div>
              <div>
                <h3 className="text-gray-900" style={{ fontSize: '24px', lineHeight: '1.3', fontWeight: 600 }}>
                  Heading 3
                </h3>
                <p className="text-gray-500 mt-2" style={{ fontSize: '14px' }}>24px / 600 weight / 1.3 line-height</p>
              </div>
              <div>
                <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-500 mt-2" style={{ fontSize: '14px' }}>16px / 400 weight / 1.6 line-height</p>
              </div>
              <div>
                <p className="text-gray-500" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Small text - Additional information or captions
                </p>
                <p className="text-gray-500 mt-2" style={{ fontSize: '14px' }}>14px / 400 weight / 1.5 line-height</p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Buttons
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <p className="text-gray-700 mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>Variants</p>
                <div className="flex flex-wrap" style={{ gap: '16px' }}>
                  <Button variant="primary" size="md">Primary Button</Button>
                  <Button variant="secondary" size="md">Secondary Button</Button>
                  <Button variant="ghost" size="md">Ghost Button</Button>
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>Sizes</p>
                <div className="flex flex-wrap items-center" style={{ gap: '16px' }}>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Tags */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Tags / Chips
            </h2>
            
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              <Tag variant="teal" size="md">React</Tag>
              <Tag variant="teal" size="md">TypeScript</Tag>
              <Tag variant="teal" size="md">Tailwind CSS</Tag>
              <Tag variant="gray" size="md">Frontend</Tag>
              <Tag variant="gray" size="md">Mobile</Tag>
              <Tag variant="teal" size="sm">Small Tag</Tag>
            </div>
          </section>

          {/* Form Inputs */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Form Inputs
            </h2>
            
            <div className="max-w-2xl" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Input
                type="text"
                id="example-input"
                name="example"
                value=""
                onChange={() => {}}
                label="Text Input"
                placeholder="Enter your text..."
              />
              
              <Input
                type="email"
                id="example-email"
                name="email"
                value=""
                onChange={() => {}}
                label="Email Input"
                placeholder="your.email@example.com"
              />
              
              <Textarea
                id="example-textarea"
                name="message"
                value=""
                onChange={() => {}}
                label="Textarea"
                placeholder="Enter your message..."
                rows={4}
              />
            </div>
          </section>

          {/* Cards */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Cards
            </h2>
            
            <div className="grid md:grid-cols-2" style={{ gap: '32px' }}>
              <Card hoverable>
                <CardHeader>
                  <h3 
                    className="text-gray-900"
                    style={{ fontSize: '20px', fontWeight: 600 }}
                  >
                    Card Title
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    This is a card component with hover effect. Cards can contain headers, content, and footers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 
                    className="text-gray-900"
                    style={{ fontSize: '20px', fontWeight: 600 }}
                  >
                    Static Card
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    This card has no hover effect. It's used for static content display.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Spacing System */}
          <section>
            <h2 
              className="text-gray-900"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #e5e7eb'
              }}
            >
              Spacing System (8px base)
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="flex items-center" style={{ gap: '24px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#0d9488' }}></div>
                <span className="text-gray-700" style={{ fontSize: '15px', minWidth: '80px' }}>8px (1x)</span>
                <span className="text-gray-500" style={{ fontSize: '14px' }}>Micro spacing</span>
              </div>
              <div className="flex items-center" style={{ gap: '24px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#0d9488' }}></div>
                <span className="text-gray-700" style={{ fontSize: '15px', minWidth: '80px' }}>16px (2x)</span>
                <span className="text-gray-500" style={{ fontSize: '14px' }}>Small gaps</span>
              </div>
              <div className="flex items-center" style={{ gap: '24px' }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#0d9488' }}></div>
                <span className="text-gray-700" style={{ fontSize: '15px', minWidth: '80px' }}>24px (3x)</span>
                <span className="text-gray-500" style={{ fontSize: '14px' }}>Medium gaps</span>
              </div>
              <div className="flex items-center" style={{ gap: '24px' }}>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#0d9488' }}></div>
                <span className="text-gray-700" style={{ fontSize: '15px', minWidth: '80px' }}>32px (4x)</span>
                <span className="text-gray-500" style={{ fontSize: '14px' }}>Card padding</span>
              </div>
              <div className="flex items-center" style={{ gap: '24px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#0d9488' }}></div>
                <span className="text-gray-700" style={{ fontSize: '15px', minWidth: '80px' }}>48px (6x)</span>
                <span className="text-gray-500" style={{ fontSize: '14px' }}>Section gaps</span>
              </div>
              <div className="flex items-center" style={{ gap: '24px' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#0d9488' }}></div>
                <span className="text-gray-700" style={{ fontSize: '15px', minWidth: '80px' }}>64px (8x)</span>
                <span className="text-gray-500" style={{ fontSize: '14px' }}>Large sections</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
