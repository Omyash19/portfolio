import { useState, useCallback, useMemo } from "react";
import "./styles/PortfolioCarousel.css";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import PortfolioGridOverlay from "./PortfolioGridOverlay";
import { projects, PROJECT_DOMAINS } from "../data/projects";
import {
  MdArrowBack,
  MdArrowForward,
  MdGridView,
  MdSearch,
  MdClose,
} from "react-icons/md";

type SlideDirection = "next" | "prev";
type FilterValue = "All" | (typeof PROJECT_DOMAINS)[number];

const filters: FilterValue[] = ["All", ...PROJECT_DOMAINS];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [query, setQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.domain === activeFilter;
      const matchesQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.tools.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const safeIndex = visibleProjects.length
    ? Math.min(currentIndex, visibleProjects.length - 1)
    : 0;
  const project = visibleProjects[safeIndex];

  const applyFilter = useCallback((next: FilterValue) => {
    setActiveFilter(next);
    setCurrentIndex(0);
  }, []);

  const applyQuery = useCallback((next: string) => {
    setQuery(next);
    setCurrentIndex(0);
  }, []);

  const goToSlide = useCallback(
    (index: number, nextDirection: SlideDirection) => {
      if (isAnimating || index === safeIndex) return;
      setDirection(nextDirection);
      setIsAnimating(true);
      setCurrentIndex(index);
      window.setTimeout(() => setIsAnimating(false), 720);
    },
    [safeIndex, isAnimating]
  );

  const goToPrev = useCallback(() => {
    if (!visibleProjects.length) return;
    const newIndex =
      safeIndex === 0 ? visibleProjects.length - 1 : safeIndex - 1;
    goToSlide(newIndex, "prev");
  }, [safeIndex, visibleProjects.length, goToSlide]);

  const goToNext = useCallback(() => {
    if (!visibleProjects.length) return;
    const newIndex =
      safeIndex === visibleProjects.length - 1 ? 0 : safeIndex + 1;
    goToSlide(newIndex, "next");
  }, [safeIndex, visibleProjects.length, goToSlide]);

  const gridItems = useMemo(
    () =>
      visibleProjects.map((p) => ({
        title: p.title,
        subtitle: p.category,
        image: p.image,
      })),
    [visibleProjects]
  );

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-heading-row">
          <h2>
            My <span>Work</span>
          </h2>
          <p className="work-heading-count">
            {projects.length} projects across data engineering, ML, and
            sports analytics
          </p>
        </div>

        <div className="work-toolbar">
          <div
            className="work-filter-chips"
            role="tablist"
            aria-label="Filter projects by domain"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`work-filter-chip ${
                  activeFilter === filter ? "work-filter-chip-active" : ""
                }`}
                onClick={() => applyFilter(filter)}
                data-cursor="disable"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="work-toolbar-actions">
            <div className="work-search">
              <MdSearch aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => applyQuery(e.target.value)}
                placeholder="Search by tech or keyword"
                aria-label="Search projects"
              />
              {query && (
                <button
                  type="button"
                  className="work-search-clear"
                  onClick={() => applyQuery("")}
                  aria-label="Clear search"
                  data-cursor="disable"
                >
                  <MdClose />
                </button>
              )}
            </div>

            <button
              type="button"
              className="work-browse-all"
              onClick={() => setIsGridOpen(true)}
              data-cursor="disable"
              disabled={!visibleProjects.length}
            >
              <MdGridView />
              Browse all
            </button>
          </div>
        </div>

        <div className="portfolio-book-carousel portfolio-carousel">
          <div className="portfolio-carousel-stage">
            {project ? (
              <div
                key={`${project.id}-${safeIndex}`}
                className={`portfolio-carousel-card portfolio-flip-${direction}`}
              >
                <article className="portfolio-project-card work-card">
                  <div className="portfolio-project-media">
                    <div className="portfolio-project-badges">
                      <span className="portfolio-project-badge">
                        {project.category}
                      </span>
                      <span className="portfolio-project-badges-right">
                        {project.featured && (
                          <span className="portfolio-project-featured">
                            Latest
                          </span>
                        )}
                        <span className="portfolio-project-count">
                          {String(safeIndex + 1).padStart(2, "0")} / {String(
                            visibleProjects.length
                          ).padStart(2, "0")}
                        </span>
                      </span>
                    </div>

                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.link}
                    />
                  </div>

                  <div className="portfolio-project-strip portfolio-project-strip-title">
                    <span className="portfolio-project-label">Title</span>
                    <h4>{project.title}</h4>
                  </div>

                  <div className="portfolio-project-strip portfolio-project-strip-stack">
                    <span className="portfolio-project-label">
                      Tech Stack
                    </span>
                    <p>{project.tools}</p>
                  </div>
                </article>
              </div>
            ) : (
              <div className="portfolio-empty-state">
                <p>No projects match that search yet — try another keyword.</p>
              </div>
            )}
          </div>

          <div className="portfolio-nav-row">
            <div className="portfolio-arrow-group">
              <button
                className="carousel-arrow"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
                disabled={isAnimating || !visibleProjects.length}
              >
                <MdArrowBack />
              </button>
              <button
                className="carousel-arrow"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
                disabled={isAnimating || !visibleProjects.length}
              >
                <MdArrowForward />
              </button>
            </div>

            <div className="portfolio-carousel-status" aria-live="polite">
              <span>Flip through projects</span>
              <span className="portfolio-carousel-divider" />
              <span>{project ? project.title : "—"}</span>
            </div>

            <div className="carousel-dots">
              {visibleProjects.map((item, index) => (
                <button
                  key={item.id}
                  className={`carousel-dot ${
                    index === safeIndex ? "carousel-dot-active" : ""
                  }`}
                  onClick={() =>
                    goToSlide(index, index > safeIndex ? "next" : "prev")
                  }
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PortfolioGridOverlay
        heading={`My Work — ${visibleProjects.length} project${
          visibleProjects.length === 1 ? "" : "s"
        }`}
        items={gridItems}
        isOpen={isGridOpen}
        activeIndex={safeIndex}
        onClose={() => setIsGridOpen(false)}
        onSelect={(index) => {
          setDirection(index > safeIndex ? "next" : "prev");
          setCurrentIndex(index);
          setIsGridOpen(false);
        }}
      />
    </section>
  );
};

export default Work;
