const config = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "",
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 10
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        opacity_min: 0.1,
        sync: true
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#fff",
      opacity: 0.2,
      width: 2
    },
    move: {
      enable: true,
      direction: "none",
      random: false,
      straight: false,
      attract: {
        enable: false,
        rotateX: 800,
        rotateY: 900
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.1
        }
      },
      bubble: {
        distance: 800,
        size: 40,
        opacity: 1,
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
};

export default config;