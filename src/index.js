import { css, styles } from 'linaria'

const clamp = css`
  position: relative;
  display: block;
  height: calc(16px * 1.2 * var(--lines));
  padding: 0;
  overflow: hidden;
  line-height: 1.2;

  &:after {
    display: block;
    position: absolute;
    width: 50%;
    height: 1.2rem;
    background: linear-gradient(to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
      80%
    );
    content: "";
    text-align: right;
    bottom: 0;
    right: 0;
  }

  @supports (-webkit-line-clamp: 1) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: var(--lines);
    -webkit-box-orient: vertical;

    &:after {
      display: none;
    }
  }
`

const LineClamp = ({ children, lines = 2 }) => children(styles(clamp), {'--lines': lines})

export default LineClamp
