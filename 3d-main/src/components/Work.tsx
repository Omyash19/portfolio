import { useState, useMemo } from "react";
import "./styles/Work.css";
import { projects, PROJECT_DOMAINS } from "../data/projects";
import { MdArrowOutward, MdSearch, MdClose } from "react-icons/md";

type FilterValue = "All" | (typeof PROJECT_DOMAINS)[number];

const filters: FilterValue[] = ["All", ...PROJECT_DOMAINS];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [query, setQuery] = useState("");

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

  const featured = visibleProjects.find((p) => p.featured);
  const rest = visibleProjects.filter((p) => !p.featured);

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
                onClick={() => setActiveFilter(filter)}
                data-cursor="disable"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="work-search">
            <MdSearch aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by tech or keyword"
              aria-label="Search projects"
            />
            {query && (
              <button
                type="button"
                className="work-search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                data-cursor="disable"
              >
                <MdClose />
              </button>
            )}
          </div>
        </div>

        {visibleProjects.length === 0 ? (
          <div className="portfolio-empty-state">
            <p>No projects match that search yet — try another keyword.</p>
          </div>
        ) : (
          <>
            {featured && (
              <a
                className="work-feature-card"
                href={featured.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <div className="work-feature-media">
                  <img src={featured.image} alt={featured.title} loading="lazy" />
                  <span className="work-feature-tag">Latest</span>
                </div>
                <div className="work-feature-body">
                  <span className="work-card-category">
                    {featured.category}
                  </span>
                  <h3>{featured.title}</h3>
                  <div className="work-card-tags">
                    {featured.tools.split(",").map((tool) => (
                      <span key={tool} className="work-card-tag">
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                  <span className="work-card-link">
                    View project <MdArrowOutward />
                  </span>
                </div>
              </a>
            )}

            <div className="work-grid">
              {rest.map((project) => (
                <a
                  key={project.id}
                  className="work-card"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  <div className="work-card-media">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <span className="work-card-link-icon">
                      <MdArrowOutward />
                    </span>
                  </div>
                  <div className="work-card-body">
                    <span className="work-card-category">
                      {project.category}
                    </span>
                    <h4>{project.title}</h4>
                    <div className="work-card-tags">
                      {project.tools
                        .split(",")
                        .slice(0, 3)
                        .map((tool) => (
                          <span key={tool} className="work-card-tag">
                            {tool.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Work;
