import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Renders a pagination component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.pages - The total number of pages.
 * @param {number} props.page - The current page number.
 * @param {boolean} [props.isAdmin=false] - Indicates if the user is an admin.
 * @param {string} [props.keyword=''] - The search keyword.
 * @returns {JSX.Element|null} The pagination component.
 */
const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={
                            !isAdmin
                                ? keyword
                                    ? `/search/${keyword}/page/${x + 1}`
                                    : `/page/${x + 1}`
                                : `/admin/productlist/${x + 1}`
                        }
                    >
                        <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                    </LinkContainer>
                ))}
            </Pagination>
        )
    );
};

export default Paginate;
