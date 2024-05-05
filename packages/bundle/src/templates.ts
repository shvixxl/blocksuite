import type { TemplateManager } from '@blocksuite/blocks';
import { EdgelessTemplatePanel } from '@blocksuite/blocks';
import { builtInTemplates as templates } from '@blocksuite/templates/edgeless';
import { builtInTemplates as stickers } from '@blocksuite/templates/stickers';

EdgelessTemplatePanel.templates.extend(templates as TemplateManager);
EdgelessTemplatePanel.templates.extend(stickers as TemplateManager);
