function AppLayout({ children }) {
  return (
    <div className="app-layout">
      
      {/* Background Pattern */}
      <div
        className="app-background"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              22.5deg,
              transparent,
              transparent 2px,
              rgba(75, 85, 99, 0.06) 2px,
              rgba(75, 85, 99, 0.06) 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              67.5deg,
              transparent,
              transparent 2px,
              rgba(107, 114, 128, 0.05) 2px,
              rgba(107, 114, 128, 0.05) 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              112.5deg,
              transparent,
              transparent 2px,
              rgba(55, 65, 81, 0.04) 2px,
              rgba(55, 65, 81, 0.04) 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              157.5deg,
              transparent,
              transparent 2px,
              rgba(31, 41, 55, 0.03) 2px,
              rgba(31, 41, 55, 0.03) 3px,
              transparent 3px,
              transparent 8px
            )
          `,
        }}
      />

      {/* Page Content */}
      <div className="app-content">
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
