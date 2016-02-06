[![Build Status](https://travis-ci.org/<%= userName %>/<%= pkgSlugName %>.svg?branch=master)](https://travis-ci.org/<%= userName %>/<%= pkgSlugName %>)

# <%= pkgCapitalizedName %>

> <%= pkgDescription %>

## Table of Contents

- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#License)

## Getting Started

Change this template to create your own module.

## Contributing

Contributions are very welcome! If you'd like to contribute,
[these guidelines](CONTRIBUTING.md) may help you.

## License

<% if (license === 'MIT') { %>

[<%= pkgSlugName %>](https://github.com/<%= userName %>/<%= pkgSlugName %>) is distributed under the *MIT License*, [available in this repository](LICENSE.md).

All contributions are assumed to be also licensed under the same.

<% } %>

<% if (license === 'APACHE') { %>

[<%= pkgSlugName %>](https://github.com/<%= userName %>/<%= pkgSlugName %>) is distributed under the *Apache Version 2.0 License*, [available in this repository](LICENSE.md).

All contributions are assumed to be also licensed under the same.

<% } %>

<% if (license === 'GPLv3') { %>

[<%= pkgSlugName %>](https://github.com/<%= userName %>/<%= pkgSlugName %>) is distributed under the *GNU General Public License Version 3*, [available in this repository](LICENSE.md).

All contributions are assumed to be also licensed under the same.

<% } %>

<% if (license === 'BSD') { %>

[<%= pkgSlugName %>](https://github.com/<%= userName %>/<%= pkgSlugName %>) is distributed under the *BSD License*, [available in this repository](LICENSE.md).

All contributions are assumed to be also licensed under the same.

<% } %>
