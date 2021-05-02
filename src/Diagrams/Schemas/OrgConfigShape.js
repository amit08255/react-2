import PropTypes from 'prop-types';
import { ConnectorType, NavigationMode, PageFitMode, Visibility, OrientationType,
HorizontalAlignmentType, VerticalAlignmentType, GroupByType, ElbowType, Enabled, SelectionPathMode,
ShapeType, LineType, ChildrenPlacementType, AdviserPlacementType, TextOrientationType,
PlacementType } from 'basicprimitives';
import OrgItemConfigShape from './OrgItemConfigShape';
import TemplateConfigShape from './TemplateConfigShape';
import BackgroundAnnotationConfigShape from './BackgroundAnnotationConfigShape';
import ConnectorAnnotationConfigShape from './ConnectorAnnotationConfigShape';
import HighlightPathAnnotationConfigShape from './HighlightPathAnnotationConfigShape';
import ShapeAnnotationConfigShape from './ShapeAnnotationConfigShape';
import LevelAnnotationConfigShape from './LevelAnnotationConfigShape';

const OrgConfigShape = PropTypes.shape({
  navigationMode: PropTypes.oneOf(Object.values(NavigationMode)),
  pageFitMode: PropTypes.oneOf(Object.values(PageFitMode)),
  minimalVisibility: PropTypes.oneOf(Object.values(Visibility)),
  minimumVisibleLevels: PropTypes.number,
  orientationType: PropTypes.oneOf(Object.values(OrientationType)),
  horizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignmentType)),
  verticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),
  arrowsDirection: PropTypes.oneOf(Object.values(GroupByType)),
  showExtraArrows: PropTypes.bool,
  extraArrowsMinimumSpace: PropTypes.number,
  showHorizontalArrows: PropTypes.bool,
  connectorType: PropTypes.oneOf(Object.values(ConnectorType)),
  bevelSize: PropTypes.number,
  elbowType: PropTypes.oneOf(Object.values(ElbowType)),
  elbowDotSize: PropTypes.number,
  emptyDiagramMessage: PropTypes.string,
  items: PropTypes.arrayOf(OrgItemConfigShape),
  annotations: PropTypes.arrayOf(PropTypes.oneOfType([BackgroundAnnotationConfigShape, ConnectorAnnotationConfigShape, HighlightPathAnnotationConfigShape, ShapeAnnotationConfigShape, LevelAnnotationConfigShape])),
  cursorItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  highlightItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  highlightGravityRadius: PropTypes.number,
  selectedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(Enabled)),
  selectCheckBoxLabel: PropTypes.string,
  selectionPathMode: PropTypes.oneOf(Object.values(SelectionPathMode)),
  templates: PropTypes.arrayOf(TemplateConfigShape),
  defaultTemplateName: PropTypes.string,
  hasButtons: PropTypes.oneOf(Object.values(Enabled)),
  onButtonsRender: PropTypes.func,

  normalLevelShift: PropTypes.number,
  dotLevelShift: PropTypes.number,
  lineLevelShift: PropTypes.number,
  normalItemsInterval: PropTypes.number,
  dotItemsInterval: PropTypes.number,
  lineItemsInterval: PropTypes.number,
  cousinsIntervalMultiplier: PropTypes.number,
  itemTitleFirstFontColor: PropTypes.string,
  itemTitleSecondFontColor: PropTypes.string,

  minimizedItemShapeType: PropTypes.oneOf(Object.values(ShapeType)),
  linesColor: PropTypes.string,
  linesWidth: PropTypes.number,
  linesType: PropTypes.oneOf(Object.values(LineType)),
  highlightLinesColor: PropTypes.string,
  highlightLinesWidth: PropTypes.number,
  highlightLinesType: PropTypes.oneOf(Object.values(LineType)),
  calloutMaximumVisibility: PropTypes.oneOf(Object.values(Visibility)),
  showCallout: PropTypes.bool,
  calloutPlacementOffset: PropTypes.number,
  defaultCalloutTemplateName: PropTypes.string,
  calloutfillColor: PropTypes.string,
  calloutBorderColor: PropTypes.string,
  calloutOffset: PropTypes.number,
  calloutCornerRadius: PropTypes.number,
  calloutPointerWidth: PropTypes.string,
  calloutLineWidth: PropTypes.number,
  calloutOpacity: PropTypes.number,
  childrenPlacementType: PropTypes.oneOf(Object.values(ChildrenPlacementType)),
  leavesPlacementType: PropTypes.oneOf(Object.values(ChildrenPlacementType)),
  placeAssistantsAboveChildren: PropTypes.bool,
  placeAdvisersAboveChildren: PropTypes.bool,
  maximumColumnsInMatrix: PropTypes.number,
  buttonsPanelSize: PropTypes.number,
  groupTitlePanelSize: PropTypes.number,
  checkBoxPanelSize: PropTypes.number,
  groupTitlePlacementType: PropTypes.oneOf(Object.values(AdviserPlacementType)),
  groupTitleOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  groupTitleVerticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),
  groupTitleHorizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignmentType)),
  groupTitleFontSize: PropTypes.string,
  groupTitleFontFamily: PropTypes.string,
  groupTitleColor: PropTypes.string,
  groupTitleFontWeight: PropTypes.string,
  groupTitleFontStyle: PropTypes.string,
  levelTitlePanelSize: PropTypes.number,
  levelTitlePlacementType: PropTypes.oneOf(Object.values(AdviserPlacementType)),
  levelTitlePlaceInside: PropTypes.bool,
  levelTitleOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  levelTitleVerticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),
  levelTitleHorizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignmentType)),
  levelTitleFontSize: PropTypes.string,
  levelTitleFontFamily: PropTypes.string,
  levelTitleFontColor: PropTypes.string,
  levelTitleColor: PropTypes.string,
  levelTitleFontWeight: PropTypes.string,
  levelTitleFontStyle: PropTypes.string,
  distance: PropTypes.number,
  scale: PropTypes.number,
  minimumScale: PropTypes.number,
  maximumScale: PropTypes.number,
  showLabels: PropTypes.oneOf(Object.values(Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOffset: PropTypes.number,
  labelOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  labelPlacement: PropTypes.oneOf(Object.values(PlacementType)),
  labelFontSize: PropTypes.string,
  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelFontStyle: PropTypes.string,
  enablePanning: PropTypes.bool,
  autoSizeMinimum: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  autoSizeMaximum: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  showFrame: PropTypes.bool,
  frameInnerPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  frameOuterPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  padding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  })
});

export default OrgConfigShape;
