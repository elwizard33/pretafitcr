/**
 * Debug Utility for Astro Components
 *
 * Provides structured debug data formatting for use with Astro's built-in Debug component.
 * Only active in development mode through conditional rendering with import.meta.env.DEV.
 *
 * @example
 * ```astro
 * ---
 * import { Debug } from 'astro:components';
 * import { formatDebugData } from '../utils/debug';
 *
 * const debugData = formatDebugData({
 *   component: 'CountdownTimer',
 *   operation: 'timezone_validation',
 *   error: timezoneError,
 *   context: { timezone, fallback: 'local time' }
 * });
 * ---
 *
 * {import.meta.env.DEV && <Debug {...debugData} />}
 * ```
 */

/**
 * Core debug context interface for structured debugging information
 */
export interface DebugContext {
  /** Name of the component where debugging occurs */
  component: string;
  /** Specific operation or action being debugged */
  operation: string;
  /** Error object or message if applicable */
  error?: Error | unknown;
  /** Additional contextual information */
  context?: Record<string, any>;
  /** Fallback behavior or recovery action taken */
  fallback?: string;
  /** Custom severity level for debugging */
  severity?: 'info' | 'warn' | 'error';
}

/**
 * Enhanced debug data with timestamp and formatted error information
 */
export interface FormattedDebugData extends DebugContext {
  /** ISO timestamp when debug data was created */
  timestamp: string;
  /** Formatted error message for better readability */
  errorMessage?: string;
  /** Stack trace if error is present */
  stackTrace?: string;
}

/**
 * Formats debug context into structured data for Astro Debug component
 *
 * @param context - The debug context information
 * @returns Formatted debug data with timestamp and error details
 */
export const formatDebugData = (context: DebugContext): FormattedDebugData => {
  const timestamp = new Date().toISOString();

  // Extract error information if present
  let errorMessage: string | undefined;
  let stackTrace: string | undefined;

  if (context.error) {
    if (context.error instanceof Error) {
      errorMessage = context.error.message;
      stackTrace = context.error.stack;
    } else {
      errorMessage = String(context.error);
    }
  }

  return {
    timestamp,
    errorMessage,
    stackTrace,
    severity: context.severity || 'info',
    ...context,
  };
};

/**
 * Creates debug data for timezone validation errors
 *
 * @param component - Component name
 * @param timezone - The invalid timezone string
 * @param error - The timezone error
 * @param fallback - Fallback timezone being used
 * @returns Formatted debug data
 */
export const createTimezoneDebugData = (
  component: string,
  timezone: string,
  error: unknown,
  fallback: string
): FormattedDebugData => {
  return formatDebugData({
    component,
    operation: 'timezone_validation',
    error,
    context: {
      invalidTimezone: timezone,
      fallbackTimezone: fallback,
      attemptedParsing: true,
    },
    fallback: `Using ${fallback} instead of ${timezone}`,
    severity: 'warn',
  });
};

/**
 * Creates debug data for data loading errors
 *
 * @param component - Component name
 * @param operation - Loading operation (e.g., 'load_reviews', 'load_schedules')
 * @param error - The loading error
 * @param fallbackData - Description of fallback data being used
 * @returns Formatted debug data
 */
export const createLoadingErrorDebugData = (
  component: string,
  operation: string,
  error: unknown,
  fallbackData: string
): FormattedDebugData => {
  return formatDebugData({
    component,
    operation,
    error,
    context: {
      loadingFailed: true,
      fallbackDataUsed: fallbackData,
    },
    fallback: fallbackData,
    severity: 'error',
  });
};

/**
 * Creates debug data for map loading issues
 *
 * @param operation - Map operation (e.g., 'map_load_timeout', 'map_access_error')
 * @param error - The map error
 * @param mapUrl - URL of the map being loaded
 * @param fallbackShown - Whether fallback content is displayed
 * @returns Formatted debug data
 */
export const createMapDebugData = (
  operation: string,
  error: unknown,
  mapUrl: string,
  fallbackShown: boolean
): FormattedDebugData => {
  return formatDebugData({
    component: 'Location',
    operation,
    error,
    context: {
      mapUrl,
      fallbackShown,
      userExperienceImpact: fallbackShown ? 'minimal' : 'none',
    },
    fallback: fallbackShown
      ? 'Showing location information without interactive map'
      : 'Map loading in progress',
    severity: 'warn',
  });
};

/**
 * Debug CSS class names for styling debug output in development
 */
export const DEBUG_CSS_CLASSES = {
  container: 'debug-output',
  error: 'debug-error',
  warn: 'debug-warn',
  info: 'debug-info',
} as const;
